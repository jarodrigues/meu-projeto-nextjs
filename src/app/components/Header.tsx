import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo / Name*/}
                <h1 className="text-xl font-semibold tracking-tight">
                    <Link href="/" className="text-xl font-semibold tracking-tight">
                    Meu primeiro projeto
                    </Link>
                </h1>

                {/* Menu simples */}
                <nav className=" flex gap-6 text-sm">
                    <Link href="/" className="hover:text-blue-400 transition">
                        Inicio
                    </Link>
                    <Link href="/sobre" className="hover:text-blue-400 transition">
                        Sobre
                    </Link>
                    <Link href="/mensagens" className="hover:text-blue-400 transition">
                        Mensagens
                    </Link>
                    <Link href="/contato" className="hover:text-blue-400 transition">
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    )
}