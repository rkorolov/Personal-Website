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
    <html lang="en">
      <body className={inter.className}>
        <div class="bg-lime">
        <Navbar />
        


        {children}
        <Footer class="bottom-0" />
        </div>

        
        </body>
    </html>
  )
}
