import { Prose, ProseContainer } from "@/components/layout/prose";
import Terminal from "./_components/terminal";

export default async function Test() {
  return (
    <ProseContainer>
      <Prose>
        <h1>Status</h1>
        <p>
          See the real-time health and availability of this website and its
          individual services (e.g., API, database, login).
        </p>
      </Prose>
      <Terminal />
    </ProseContainer>
  );
}
