"use client"

import { Button } from "@/components/ui/button"
import { Phone, Shield, Sparkles } from "lucide-react"

const WHATSAPP_NUMBER = "5598981896562"
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços de estética automotiva."

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(url, "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Shield className="w-6 h-6 text-primary" />
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Consultor de Vendas
          </span>
          <Sparkles className="w-6 h-6 text-primary" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          <span className="text-foreground">Garanta a</span>{" "}
          <span className="text-primary">segurança</span>{" "}
          <span className="text-foreground">e</span>{" "}
          <span className="text-primary">estilo</span>{" "}
          <span className="text-foreground">do seu carro</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          Películas, Acessórios, Revestimento, Polimento, Vitrificação, 
          Cristalização, Impermeabilização e Hidratação de Bancos
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleWhatsAppClick}
          >
            <Phone className="w-5 h-5 mr-2" />
            Fale Comigo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Catálogo
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold text-primary">Esdras Palheta</span>
          <a 
            href="mailto:esdras.preparalto@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            esdras.preparalto@gmail.com
          </a>
          <a 
            href="tel:+5598981896562" 
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            (98) 98189-6562
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
