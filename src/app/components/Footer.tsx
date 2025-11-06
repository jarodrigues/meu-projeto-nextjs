export default function Footer() {
    return (
    <div className="bg-gray-900 text-gray-400 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm">
                @ {new Date().getFullYear()} Meu Projeto Next. Todos os direitos reservados.
            </p>

            <div className="flex gap-4 text-sm">
                <a href="#" className="hover:text-blue-400 transition">
                    Termos
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                    Privacidade
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                    Contato
                </a>
            </div>
        </div>
    </div>
    );
}