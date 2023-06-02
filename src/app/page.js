import Image from 'next/image'
import Navbar from './navbar'
import Intro from './intro'
import About from './about'
import Portfolio from './portfolio'
import Contact from './contact'
import Footer from './footer'
import Sidebar from './sidebar'

export default function Home() {
  return (
    <main className="w-full">
        <Sidebar />
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </main>
  )
}
