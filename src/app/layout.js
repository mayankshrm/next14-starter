import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:"next14 HomePage",
    template: "%s | Next14"

  },
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='container'>
      <NavBar/>
      {children}
      
      <Footer/>
      
      </div>
      </body>
    </html>
  )
}