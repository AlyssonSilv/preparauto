"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, ChevronRight } from "lucide-react"

const WHATSAPP_NUMBER = "5598981896562"
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços de estética automotiva."

const navLinks = [
  { href: "#peliculas", label: "Películas" },
  { href: "#ppf", label: "PPF" },
  { href: "#revestimento", label: "Revestimento" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(url, "_blank")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105">
            <Image
              src="/logo.jpeg"
              alt="Logo Esdras Palheta"
              width={48}
              height={48}
              className="rounded-md object-cover shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold text-primary uppercase tracking-tight">
                Esdras Palheta
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-semibold hidden sm:block">
                Estética Automotiva
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-md hover:shadow-lg transition-all"
              onClick={handleWhatsAppClick}
            >
              <Phone className="w-4 h-4 mr-2" />
              Fale Comigo
            </Button>
          </div>

          {/* Mobile Menu (GAVETA RESPONSIVA) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/10">
                <Menu className="w-7 h-7" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent 
              side="right" 
              className="bg-background/95 backdrop-blur-xl border-l border-primary/20 w-[85vw] max-w-[350px] p-0 flex flex-col"
            >
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              
              {/* Header do Menu Mobile com Logo */}
              <div className="p-6 border-b border-border/50 bg-background">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.jpeg"
                    alt="Logo Esdras Palheta"
                    width={40}
                    height={40}
                    className="rounded-md object-cover shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span className="text-base font-extrabold text-primary uppercase">Esdras Palheta</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Menu</span>
                  </div>
                </div>
              </div>

              {/* Links de Navegação Mobile */}
              <div className="flex-1 overflow-y-auto py-4 px-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between text-base font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors py-4 px-4 rounded-xl border border-transparent hover:border-primary/10"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Rodapé do Menu Mobile com Botão */}
              <div className="p-6 border-t border-border/50 bg-background mt-auto">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-bold shadow-lg"
                  onClick={() => {
                    handleWhatsAppClick()
                    setIsOpen(false)
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          
        </div>
      </div>
    </header>
  )
}