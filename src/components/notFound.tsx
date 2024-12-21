import Link from "next/link";

const NotFound = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <section className="flex flex-col justify-center h-auto sm:h-[60vh]">
      <div className="py-8 px-4 mx-auto text-center">
        <div className="max-w-screen-sm mx-auto">
          <p className="mb-4 text-3xl tracking-tight font-bold text-primary md:text-4xl">
            Título não encontrado...
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Não conseguimos localizar nenhum filme! Tente um outro título.
          </p>
          <Link
            href="/"
            onClick={handleReload}
            className="inline-flex text-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Voltar para página inicial
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
