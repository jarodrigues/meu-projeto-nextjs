"use client";

import { useState } from "react";

export default function Contato(){
    const [ formData, setFormData] = useState({
        nome:"",
        email:"",
        mensagem: "",
    });
    
    const[enviando, setEnviando] = useState( false );
    const[sucesso, setSucesso] = useState( false );

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEnviando(true);
        setSucesso(false);

        try {
            const res = await fetch("/api/contato", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
       

            //await new Promise((resolve) => setTimeout(resolve, 1500));
            const result = await res.json();

            if(res.ok) {
                setSucesso(true);
                setFormData({nome:"", email:"", mensagem:""});
            } else {
                alert(result.error || "Erro ao enviar mensagem");
            }
         } catch (error) {
            alert("Erro ao enviar mensagem");
            console.error(error);
         } finally {
            setEnviando(false);
         }
    };

    return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Fale Conosco
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Envie uma mensagem e retornaremos o mais breve possível.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="seuemail@email.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Mensagem
          </label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={enviando}
          className={`w-full py-3 font-semibold text-white rounded-lg transition 
          ${enviando ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {enviando ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {sucesso && (
          <p className="text-green-600 text-center mt-3">
            ✅ Mensagem enviada com sucesso!
          </p>
        )}
      </form>
    </section>
  );

}