import { Quicksand } from 'next/font/google'
import type { Metadata } from 'next'

import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import '@/styles/globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yachti - Luxury Maritime Experiences',
  description: 'Book luxury yacht charters, find experienced captains, and manage your fleet with Yachti.',
  keywords: ['yacht rental', 'boat charter', 'luxury yachts', 'maritime experiences', 'yacht management'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}