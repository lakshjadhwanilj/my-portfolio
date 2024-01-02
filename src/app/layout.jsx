import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Script from 'next/script'

const josefin = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Laksh Jadhwani',
  description: 'A portfolio web-app of Laksh Jadhwani made using Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <div className='m-auto px-5 md:px-10 lg:px-24 min-h-[calc(100vh-6rem)] md:min-h-screen flex flex-col justify-between'>
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* Lottie */}
        <Script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></Script> 
        <Script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></Script> 
      </body>
    </html>
  )
}
