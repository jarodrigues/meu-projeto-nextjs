import { prisma } from "@/lib/prisma";

export async function GET() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return new Response(JSON.stringify(messages), {  
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  
}

// POST → cria nova mensagem msg
export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const newMessage = await prisma.message.create({
    data: { name, email, message },
  });

  return new Response(JSON.stringify(newMessage), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}