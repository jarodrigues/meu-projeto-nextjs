"use client";
import { useState, useEffect, useCallback } from "react";
import { Form } from "../components/Form";
import { MessageList } from "../components/MessageList";

export type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function MenssagensPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/message");
      if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
      const data = await res.json();
      setMessages(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mensagens</h1>
      <Form onNewMessage={fetchMessages} />
      <MessageList messages={messages} loading={loading} error={error} />
    </div>
  );
}
