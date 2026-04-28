"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Shield, Sun, Check } from "lucide-react"

const WHATSAPP_NUMBER = "5598981896562"

const peliculas = [
  {
    name: "Térmica",
    icon: Thermometer,
    description: "Nano Cerâmica",
    highlight: "99% de redução térmica",
    benefits: [
      "Protege dos raios UV, UVB e IR",
      "Diminui em até 99% a sensação térmica",
      "Evita desgaste dos plásticos e bancos",
      "Protege a parte elétrica interna",
      "Tecnologia Nano Cerâmica"
    ],
    badge: "Mais Vendida",
    badgeVariant: "default" as const
  },
  {
    name: "Total Protection",
    icon: Shield,
    description: "Nano Cerâmica + Anti-Impacto",
    highlight: "75% de redução térmica",
    benefits: [
      "Todos os benefícios da película Térmica",
      "Até 95kg de resistência a mais para os vidros",
      "Película mais grossa que a tradicional",
      "Proteção Anti-Impacto",
      "Tecnologia Nano Cerâmica"
    ],
    badge: "Premium",
    badgeVariant: "secondary" as const
  },
  {
    name: "Grafite",
    icon: Sun,
    description: "Escurecimento + Proteção UV",
    highlight: "Proteção UV",
    benefits: [
      "Escurece os vidros",
      "Protege contra raios UV",
      "Opção econômica",
      "Visual elegante",
      "Aplicação rápida"
    ],
    badge: "Econômica",
    badgeVariant: "outline" as const
  }
]

export function PeliculasSection() {
  const handleWhatsAppClick = (pelicula: string) => {
    const message = `Olá! Gostaria de saber mais sobre a película ${pelicula}.`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="peliculas" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Em Promoção
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Películas Automotivas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Três opções de películas de alta qualidade para proteger seu veículo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {peliculas.map((pelicula) => (
            <Card 
              key={pelicula.name} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <pelicula.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant={pelicula.badgeVariant} className={pelicula.badgeVariant === "default" ? "bg-primary text-primary-foreground" : ""}>
                    {pelicula.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-foreground">{pelicula.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {pelicula.description}
                </CardDescription>
                <div className="mt-2">
                  <span className="text-primary font-semibold">{pelicula.highlight}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pelicula.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => handleWhatsAppClick(pelicula.name)}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
