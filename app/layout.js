import { Comic_Neue, Eczar, Inknut_Antiqua, Playfair_Display, Proza_Libre, Short_Stack, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Proza_Libre({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: "My Website",
  description: "Welcome to my website!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="bg-lime">
      <body className={inter.className}>

        <Navbar />
        


        {children}
        <Footer class="bottom-0" />
        </body>
    </html>
  )
}
