import Image from "next/image"

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-20">
      {/* Texto principal */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Construa interfaces modernas com{" "}
          <span className="text-blue-600">Next.js 15</span>
        </h1>

        <p className="text-gray-600 mt-4 text-lg max-w-md mx-auto md:mx-0">
          Aprenda a criar aplicações rápidas, seguras e escaláveis com React e
          TypeScript — do zero ao deploy.
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
          >
            Começar agora
          </a>
        </div>
      </div>

      {/* Ilustração */}
      <div className="flex-1 flex justify-center">
        <Image
            src="/images/hero.svg"
            alt="Ilustração: configuração de site"
            width={384}       // ajusta conforme o arquivo
            height={320}      // ajusta conforme o arquivo
            priority={false}
          />
      </div>
    </section>
  );
}
