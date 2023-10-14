import './globals.css'

import type { Metadata } from 'next'

import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Planar soluções',
  description: 'Empresa de engenharia elétrica e energia fotovoltaica, especializada em pulverização de lavouras com drones. Inovação, sustentabilidade e precisão para atender às necessidades energéticas e agrícolas. Saiba mais!',
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
        <Footer />
      </body>
    </html>
  )
}