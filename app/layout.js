import { Comic_Neue, Eczar, Inknut_Antiqua, Playfair_Display, Proza_Libre, Short_Stack, Space_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Proza_Libre({ subsets: ['latin'], weight:"400" })

export const metadata = {
  title: "ruslana korolov",
  description: "ruslana korolov",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="bg-white">
      <body className={inter.className}>

        
        {children}
        
        </body>
    </html>
  )
}
