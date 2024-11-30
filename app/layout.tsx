import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parth Gera - Software Developer',
  description: 'Portfolio of Parth Gera, a skilled software developer specializing in React.js, Next.js, Express.js, Node.js, and MongoDB.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 z-[-1]" />
        {children}
      </body>
    </html>
  )
}

