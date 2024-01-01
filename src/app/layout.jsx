import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const josefin = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Laksh Jadhwani',
  description: 'A portfolio web-app of Laksh Jadhwani made using Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <div className='m-auto px-[100px] min-h-screen flex flex-col justify-between'>
          <Navbar />
          {children}
          <Footer />
          {/* Lottie */}
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
        </div>
      </body>
    </html>
  )
}
