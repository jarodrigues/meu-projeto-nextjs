"use client";
import { Message } from "../mensagens/page";

type MessageListProps = {
  messages: Message[];
  loading: boolean;
  error: string | null;
};

export function MessageList({ messages, loading, error }: MessageListProps) {
  if (loading) return <p>Carregando mensagens...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <ul className="flex flex-col gap-2">
      {messages.map((msg) => (
        <li key={msg.id} className="border p-2 rounded">
          <strong>Nome: </strong> {msg.name}<br /><strong>Email: </strong> {msg.email}<br /><strong>Mensagem: </strong>{msg.message}
        </li>
      ))}
    </ul>
  );
}
