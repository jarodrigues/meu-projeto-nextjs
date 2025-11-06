export default function Sobre() {
    return (
        <section className="py-20 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Sibre este projeto
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
                Exte projeto foi criado para demonstrar o poder do{" "}
                <span className="font-semibold text-blue-600"> Next.js 15</span> com 
                Typescript e tailwind css. Ele utiliza os recursos mais recentes, como 
                Server Compnonents. App Router e deploy otimizado na Vercel
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mt-6">
                Nosso objetivo é construir interfaces modernas e acessíveis, com foco em
                performance e boas práticas de desenvolvimento.
            </p>

        </section>
    )
}