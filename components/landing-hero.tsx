"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-20 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>A melhor ferramenta de IA para</h1>
        <div className=" bg-gradient-to-b from-pink-500 to-rose-500 bg-clip-text text-transparent pb-2">
          <TypewriterComponent
            options={{
              strings: [
                "Gerar Fotos",
                "Gerar Vídeos ",
                "Gerar Músicas",
                "Estudar Programação",
                "Desenvolver Ideias",
                "Acelerar Produção",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-100">
            Venha descobrir o mundo da Inteligência Artificial.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/registre-se"}>
          <Button variant="register" className="text-violet-700 md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Comece a usar gratuitamente
          </Button>
        </Link>
      </div>
      <div className="text-zinc-300 text-xs md:text-sm font-normal">
            Totalmente de graça
      </div>
    </div>
  );
};