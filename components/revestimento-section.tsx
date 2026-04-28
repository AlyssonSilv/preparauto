"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers, Check, Star } from "lucide-react"

const WHATSAPP_NUMBER = "5598981896562"

const beneficios = [
  "Proteção total do assoalho original",
  "Fácil limpeza e manutenção",
  "Resistente a água e sujeira",
  "Aumenta a durabilidade do veículo",
  "Acabamento premium",
  "Instalação profissional"
]

export function RevestimentoSection() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre o Revestimento para Assoalho."
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="revestimento" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <Star className="w-3 h-3 mr-1 fill-primary" />
            Mais Vendido
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Revestimento para Assoalho
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Um dos serviços mais procurados! Proteção completa para o piso do seu veículo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-primary/30 hover:border-primary transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl text-foreground">
                Revestimento Premium
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Proteção e acabamento de alta qualidade para o assoalho do seu veículo
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{beneficio}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                  onClick={handleWhatsAppClick}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
