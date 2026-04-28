import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PeliculasSection } from "@/components/peliculas-section"
import { PPFSection } from "@/components/ppf-section"
import { RevestimentoSection } from "@/components/revestimento-section"
import { ServicosSection } from "@/components/servicos-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PeliculasSection />
      <PPFSection />
      <RevestimentoSection />
      <ServicosSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
