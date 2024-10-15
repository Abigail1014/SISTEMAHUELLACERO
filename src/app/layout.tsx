import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Huella Cero',
  description: 'Sistema web para Huella Cero',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className="min-h-screen scroll-smooth">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}