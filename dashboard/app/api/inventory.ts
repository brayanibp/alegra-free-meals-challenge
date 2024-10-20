export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);
  return Response.json(res);
}

export async function GET(request: Request) {
  const res = await request.json();
  console.log(res);
  return Response.json(res);
}