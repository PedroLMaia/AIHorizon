"use client"

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { 
    LayoutDashboard, 
    MessagesSquare, 
    ImageIcon,
    VideoIcon,
    Music,
    Code,
    Settings
} from "lucide-react";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Chat",
        icon: MessagesSquare,
        href: "/chat",
        color: "text-violet-500"
    },
    {
        label: "Gerador de Imagem",
        icon: ImageIcon,
        href: "/imagem",
        color: "text-pink-500"
    },
    {
        label: "Gerador de Video",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-500"
    },
    {
        label: "Gerador de Música",
        icon: Music,
        href: "/musica",
        color: "text-green-500"
    },
    {
        label: "Gerador de Codigo",
        icon: Code,
        href: "/codigo",
        color: "text-red-500"
    },
    {
        label: "Configurações",
        icon: Settings,
        href: "/configuracoes",
    }
]

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src={"/logo.png"}
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        AI Horizon
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                            pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                            >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;