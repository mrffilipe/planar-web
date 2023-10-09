import NavMenu from '@/components/NavMenu'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Planar',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <NavMenu />
        <main>
          <div id="container">{children}</div>
        </main>
      </body>
    </html>
  )
}