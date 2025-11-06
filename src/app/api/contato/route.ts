import { prisma } from "@/lib/prisma";

export async function GET() {
  const messages = await prisma.mensagem.findMany({
    orderBy: { createdAt: "desc" },
  });

  return new Response(JSON.stringify(messages), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  
}

// POST → cria nova mensagem
export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const newMessage = await prisma.mensagem.create({
    data: { name, email, message },
  });

  return new Response(JSON.stringify(newMessage), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}