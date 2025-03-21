import About from '@/layout/About'
import Browse from '@/layout/Browse'
import Choose from '@/layout/Choose'
import Footer from '@/layout/Footer'
import Home from '@/layout/Home'
import Invest from '@/layout/Invest'
import Navbar from '@/layout/Navbar'
import Partner from '@/layout/Partner'
import Top from '@/layout/Top'
import { ReactLenis } from 'lenis/react'

export default async function HomePage() {
  return (
    <ReactLenis root>
      <Navbar />
      <Home />
      <About />
      <Top />
      <Partner />
      <Choose />
      <Browse />
      <Invest />
      <Footer />
    </ReactLenis>
  )
}
