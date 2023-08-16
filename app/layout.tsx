import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons:{
    icon: './public/favicon/favicon.ico',
  },
  title: 'AIHorizon',
  description: 'Plataforma de IA baseada em SaaS, API - openIA, Front-End - Next.js 13, React, Tailwind, Prisma e Stripe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
