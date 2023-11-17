import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar'
import Providers from '@/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dictionary Anju',
  description: 'Online dictionary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} lg:px-48 md:px-32 px-10`}>

        <Providers >
          <NavBar />
          {children}
        </Providers>
        
        
      </body>
    </html>
  )
}
