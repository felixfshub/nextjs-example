"use client";

import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { Camera, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { updateProfileImage } from "../actions";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;
const ACCEPTED_FILE_TYPES = ALLOWED_TYPES.join(",");
const MAX_CROPPED_SIZE_BYTES = 100 * 1024;

type PreviewState = {
  originalUrl: string;
  croppedUrl: string;
  file: File;
} | null;

export default function UploadProfileImageButton() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [preview, setPreview] = useState<PreviewState>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview.originalUrl);
        URL.revokeObjectURL(preview.croppedUrl);
      }
    };
  }, [preview]);

  function resetForm() {
    setError(null);
    setPreview(null);
  }

  function handleDialogChange(nextOpen: boolean) {
    setOpen(nextOpen);

    if (!nextOpen) {
      resetForm();
    }
  }

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type as (typeof ALLOWED_TYPES)[number])) {
      setError("Invalid file type. Only JPEG, PNG, and WebP are allowed.");
      return;
    }

    setError(null);

    try {
      const originalUrl = URL.createObjectURL(file);
      const croppedBlob = await cropImageToSquare(originalUrl, file.type);

      if (croppedBlob.size > MAX_CROPPED_SIZE_BYTES) {
        URL.revokeObjectURL(originalUrl);
        setError("Cropped image too large. Maximum size is 100 KB.");
        return;
      }

      const croppedUrl = URL.createObjectURL(croppedBlob);

      setPreview({
        originalUrl,
        croppedUrl,
        file: new File([croppedBlob], file.name, { type: file.type }),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to process image");
    }
  }

  function handleSubmit() {
    if (!preview) return;

    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("file", preview.file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to upload image");
        }

        await updateProfileImage(data.url);

        handleDialogChange(false);
        window.location.reload();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to upload image");
      }
    });
  }

  const canUpload = Boolean(preview) && !isPending;

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="justify-start">
          <Camera className="mr-2 size-4" />
          Upload Profile Image
        </Button>
      </DialogTrigger>

      <DialogContent aria-describedby="upload-image-description">
        <DialogHeader>
          <DialogTitle>Upload Profile Image</DialogTitle>
          <DialogDescription id="upload-image-description">
            JPEG, PNG, and WebP are supported. The image will be cropped to a
            square.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Input
            type="file"
            accept={ACCEPTED_FILE_TYPES}
            onChange={handleFileChange}
            disabled={isPending}
          />

          {preview && (
            <div className="flex justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border bg-muted">
                <Image
                  src={preview.croppedUrl}
                  fill
                  alt="Cropped preview"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={isPending}>
              Cancel
            </Button>
          </DialogClose>

          <Button onClick={handleSubmit} disabled={!canUpload}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              "Upload"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function cropImageToSquare(imageUrl: string, fileType: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const image = new window.Image();
    image.crossOrigin = "anonymous";

    image.onload = () => {
      const size = Math.min(image.width, image.height);
      const offsetX = (image.width - size) / 2;
      const offsetY = (image.height - size) / 2;
      const outputSize = Math.min(size, 200);

      const canvas = document.createElement("canvas");
      canvas.width = outputSize;
      canvas.height = outputSize;

      const context = canvas.getContext("2d");
      if (!context) {
        reject(new Error("Failed to get canvas context"));
        return;
      }

      context.drawImage(
        image,
        offsetX,
        offsetY,
        size,
        size,
        0,
        0,
        outputSize,
        outputSize,
      );

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Blob creation failed"));
          }
        },
        fileType,
        0.7,
      );
    };

    image.onerror = () => reject(new Error("Failed to load image"));
    image.src = imageUrl;
  });
}
