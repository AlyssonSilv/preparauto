"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Car } from "lucide-react"

const WHATSAPP_NUMBER = "5598981896562"

const ppfPrecos = [
  { tamanho: "P", descricao: "Veículos Pequenos", preco: "16.500" },
  { tamanho: "M", descricao: "Veículos Médios", preco: "19.500" },
  { tamanho: "G", descricao: "Veículos Grandes", preco: "23.500" },
  { tamanho: "GG", descricao: "SUVs e Picapes", preco: "26.000" },
]

export function PPFSection() {
  const handleWhatsAppClick = (tamanho: string) => {
    const message = `Olá! Gostaria de saber mais sobre o PPF Full para veículo ${tamanho}.`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="ppf" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Proteção Máxima
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            PPF Full - Paint Protection Film
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Proteção total da pintura do seu veículo contra riscos, pedras e desgaste
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ppfPrecos.map((item) => (
            <Card 
              key={item.tamanho}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <CardHeader className="pb-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <Badge className="mx-auto mb-2 bg-primary text-primary-foreground">
                  Veículo {item.tamanho}
                </Badge>
                <CardTitle className="text-lg text-muted-foreground">
                  {item.descricao}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">A partir de</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-primary">R$</span>
                    <span className="text-3xl font-bold text-primary">{item.preco}</span>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleWhatsAppClick(item.tamanho)}
                >
                  Consultar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Proteção contra riscos</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Resistente a pedras</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Mantém o brilho original</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Valoriza seu veículo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
