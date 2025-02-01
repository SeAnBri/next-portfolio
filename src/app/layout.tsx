import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sebastian Britner',
  description: 'My tech stack, experience and projects.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
