import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'OstrowskiDev Portfolio',
  description:
    'Early version of my personal portfolio as a full-stack developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
