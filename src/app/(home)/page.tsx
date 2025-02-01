import { Experience } from '@/components/experience/Experience'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Portfolio } from '@/components/portfolio/Portfolio'

export default function Home() {
  return (
    <>
      <Header />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  )
}
