"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5598981896562"
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços de estética automotiva."

export function ContactSection() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Fale Comigo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estou pronto para ajudar você a escolher o melhor serviço para o seu veículo
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Esdras Palheta</h3>
                <p className="text-muted-foreground">Consultor de Vendas</p>
              </div>

              <div className="space-y-4 mb-8">
                <a 
                  href="tel:+5598981896562"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone / WhatsApp</p>
                    <p className="text-lg font-semibold text-foreground">(98) 98189-6562</p>
                  </div>
                </a>

                <a 
                  href="mailto:esdras.preparalto@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="text-lg font-semibold text-foreground">esdras.preparalto@gmail.com</p>
                  </div>
                </a>
              </div>

              <Button 
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-lg py-6"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
