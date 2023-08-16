"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

const tools = [
  {
    label: "Chat",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/chat"
  },
  {
    label: "Gerar Música",
    icon: Music,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/musica"
  },
  {
    label: "Gerar Imagem",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/imagem"
  },
  {
    label: "Gerar Video",
    icon: VideoIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/video"
  },
  {
    label: "Gerar Codigo",
    icon: Code,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/codigo"
  }
]

const DashboardPage = () => {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Descubra o poder da IA
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Converse com a IA mais inteligente - Experimente o poder da IA
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card 
          key={tool.href}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage;
