import './globals.css'
import { Bruno_Ace_SC } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Bruno_Ace_SC({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'NFT MarketPlace',
  description: 'Made by Mobius',
  creator: 'mobius.founder@gmail.com'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
