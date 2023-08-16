"use client";

import { Card } from "@/components/ui/card";

import { MessageSquare } from "lucide-react";

const tools = [
  {
    label: "Chat",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/chat"
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
          <Card key={tool.href}>

          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage;
