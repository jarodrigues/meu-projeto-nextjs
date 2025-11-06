// src/app/components/MessageList.test.tsx
import { render, screen } from "@testing-library/react";
import { MessageList } from "./MessageList";
import type { Message } from "../mensagens/page";

describe("MessageList component", () => {
  const messagesMock: Message[] = [
    { id: 1, name: "Jonas", email: "joao@gmail.com", message: "Oi!", createdAt: "2025-11-03T00:00:00Z" },
    { id: 2, name: "Maria", email: "lucas@gmail.com", message: "Olá!", createdAt: "2025-11-03T01:00:00Z" },
  ];

  it("renders loading state", () => {
    render(<MessageList messages={[]} loading={true} error={null} />);
    expect(screen.getByText(/Carregando mensagens/i)).toBeInTheDocument();
  });

  it("renders error state", () => {
    render(<MessageList messages={[]} loading={false} error="Falha no servidor" />);
    expect(screen.getByText(/Erro: Falha no servidor/i)).toBeInTheDocument();
  });

  it("renders messages", () => {
    render(<MessageList messages={messagesMock} loading={false} error={null} />);
    expect(screen.getByText(/Jonas/i)).toBeInTheDocument();
    expect(screen.getByText(/Maria/i)).toBeInTheDocument();
  });
});
