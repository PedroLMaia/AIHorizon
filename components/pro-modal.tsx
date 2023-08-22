"use client";

import {
    Check,
    Code,
    ImageIcon,
    MessageSquare,
    Music,
    VideoIcon,
    Zap
  } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const tools = [
    {
      label: "Chat",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: "Gerar Música",
      icon: Music,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Gerar Imagem",
      icon: ImageIcon,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      label: "Gerar Video",
      icon: VideoIcon,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      label: "Gerar Codigo",
      icon: Code,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    }
  ]

export const ProModal = () => {
    const proModal = useProModal();

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to Horizon
                            <Badge variant="primium" className="uppercase text-sm py-1">
                                pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card
                            key={tool.label}
                            className="p-3 border-black/5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)}/>
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-5 h-5"/>
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                    size="lg"
                    variant="premium"
                    className="w-full"
                    >
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white"/>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}