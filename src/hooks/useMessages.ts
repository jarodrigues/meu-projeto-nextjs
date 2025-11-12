"use cliente";

import { useEffect, useState, useCallback } from "react";

export type Message = {
    id: number,
    name: string,
    email: string,
    message: string,
    createdAt: string,
}

export function useMessages(){
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMessages = useCallback( async  () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/message");
            if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
            const data = await res.json();

            if (Array.isArray(data)) setMessages(data);
            else throw new Error("Formato inesperado de resposta");
        } catch (err) 
        {
            console.error("Erro ao buscar mensagens:", err);
            setError(err instanceof Error ? err.message : "Erro desconhecido");
        } finally {
            setLoading(false);
        }
  }, []);

  // Executa uma vez ao montar
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

   // Retorna tudo o que o componente pode usar
  return { messages, loading, error, refresh: fetchMessages };

}