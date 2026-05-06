import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const _geistMono = Geist_Mono({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: 'Esdras Palheta | Películas e Estética Automotiva',
  description: 'Películas, Acessórios, Revestimento, Polimento, Vitrificação, Cristalização, Impermeabilização e Hidratação de Bancos. Garanta a segurança e estilo do seu carro!',
  generator: 'v0.app',
  keywords: ['película automotiva', 'vitrificação', 'polimento', 'PPF', 'estética automotiva', 'São Luís'],
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}