"use client";
import { useState } from "react";
import toast from "react-hot-toast";
type FormProps = {
  onNewMessage: () => void;
};

export function Form({ onNewMessage }: FormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Erro ao enviar mensagem");

      setName("");
      setEmail("");
      setMessage("");

      onNewMessage(); // ⬅️ Atualiza a lista do pai
      toast.success("Mensagem enviada com sucesso!");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar mensagem");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2 max-w-md">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome"
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2"
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Sua mensagem"
        className="border p-2 rounded resize-none"
        rows={4}
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 rounded text-white ${
          isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
