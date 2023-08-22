"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Pedro",
    avatar: "A",
    title: "Engenheiro de software",
    description: "Este é o melhor aplicativo que já usei!",
  },
  {
    name: "Camila",
    avatar: "A",
    title: "Designer",
    description: "Eu uso isso diariamente para gerar novas fotos.",
  },
  {
    name: "Luiz",
    avatar: "A",
    title: "Advogado",
    description: "Este aplicativo mudou minha vida!",
  },
  {
    name: "Marianne",
    avatar: "A",
    title: "Arquiteta",
    description: "O melhor da categoria, definitivamente vale a pena a assinatura premium!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Depoimentos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-clip-text text-transparent border-2 border-indigo-500 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}