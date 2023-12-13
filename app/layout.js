import { Comic_Neue, Short_Stack } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Short_Stack({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: "My Website",
  description: "Welcome to my website!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />


        {children}
        </body>
    </html>
  )
}
