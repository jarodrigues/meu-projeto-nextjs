import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form } from "./Form";
import { vi } from "vitest";

// Mock do toast
vi.mock("react-hot-toast", () => {
  return {
    default: {
      success: vi.fn(),
      error: vi.fn(),
    },
  };
});

describe("Form component", () => {
  test("calls onNewMessage when form is submitted", async () => {
    const mockOnNewMessage = vi.fn();

    // Mock global fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      } as Response)
    ) as unknown as typeof fetch;

    render(<Form onNewMessage={mockOnNewMessage} />);

    // Preenche os inputs
    fireEvent.change(screen.getByPlaceholderText("Seu nome"), { target: { value: "Jonas" } });
    fireEvent.change(screen.getByPlaceholderText("Seu email"), { target: { value: "jonas@email.com" } });
    fireEvent.change(screen.getByPlaceholderText("Sua mensagem"), { target: { value: "Oi!" } });

    // Submete o form
    fireEvent.click(screen.getByRole("button", { name: /enviar/i }));

    // Verifica se o callback do pai foi chamado
    await waitFor(() => {
      expect(mockOnNewMessage).toHaveBeenCalled();
    });

    // Opcional: verificar se os inputs foram limpos
    expect(screen.getByPlaceholderText("Seu nome")).toHaveValue("");
    expect(screen.getByPlaceholderText("Seu email")).toHaveValue("");
    expect(screen.getByPlaceholderText("Sua mensagem")).toHaveValue("");
  });
});
