export async function GET() {
  return Response.json(
    { message: "Hello from api, db is under development" },
    { status: 500 },
  );
}
