import { Button, Link } from "@nextui-org/react";

export const GettingStarted = () => {
  return (
    <main className="h-screen  flex flex-col justify-center items-center text-center">
      <section>
        <h1 className="text-5xl font-bold text-orange-600 uppercase ">
          Deja a la IA crear tu rutina personalizada <br /> y empieza a entrenar
        </h1>
        <Button
          as={Link}
          href="/routine/create"
          className="lg:w-96 w-full border-orange-500 text-lg h-11 mt-5 text-black hover:bg-orange-500 hover:text-white transition duration-200"
          variant="bordered"
        >
          Empezar
        </Button>
      </section>
    </main>
  );
};
