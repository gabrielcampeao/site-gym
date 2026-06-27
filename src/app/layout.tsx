import type { Metadata } from 'next'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
  title: 'Stone Gym',
  description: 'A academia que transforma sua rotina.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gym-dark text-white antialiased">
        {children}
        <ClientProviders />
      </body>
    </html>
  )
}
