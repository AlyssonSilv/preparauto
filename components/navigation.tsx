"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone } from "lucide-react"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo Atualizada */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Logo Esdras Palheta"
              width={48}
              height={48}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-primary">Esdras Palheta</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Estética Automotiva</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleWhatsAppClick}
            >
              <Phone className="w-4 h-4 mr-2" />
              Fale Comigo
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-[280px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-bold text-primary">Menu</span>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => {
                      handleWhatsAppClick()
                      setIsOpen(false)
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Fale Comigo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}