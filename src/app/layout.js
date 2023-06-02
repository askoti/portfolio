import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/money.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
