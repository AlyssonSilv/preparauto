"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Tag, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "5598981896562"

const servicos = [
  { nome: "Hidratação de Banco em Couros", codigo: "HIDRAT", preco: 550 },
  { nome: "Polimento Técnico Cristalizado", codigo: "POLTECSLZ", preco: 700 },
  { nome: "Higienização Interna", codigo: "HIG", preco: 700 },
  { nome: "Lavagem Simples", codigo: "LAV", preco: 150 },
  { nome: "Lavagem com Cera", codigo: "LAVC", preco: 180 },
  { nome: "Lavagem Completa com Motor", codigo: "LAVM", preco: 270 },
  { nome: "Troca de Manta", codigo: "TROCM", preco: 600 },
  { nome: "Remoção de Chuva Ácida", codigo: "REMSLZ", preco: 250 },
  { nome: "Cristalização de Parabrisa", codigo: "CRPB2025", preco: 550 },
  { nome: "Vitrificação de Bancos em Couro", codigo: "VTBANCOS", preco: 1300 },
  { nome: "Revitalização de Plástico", codigo: "REVIT2025", preco: 450 },
  { nome: "Enceramento Premium", codigo: "ENCP", preco: 500 },
  { nome: "Vitrificação de Farol", codigo: "VITF", preco: 350 },
  { nome: "Vitrificação de Pintura", codigo: "VITPP", preco: 2000 },
  { nome: "Vitrificação de Motos", codigo: "VITMTO", preco: 1500 },
  { nome: "Vitrificação de Plásticos Externos", codigo: "VITFP", preco: 600 },
]

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })
}

export function ServicosSection() {
  const handleWhatsAppClick = (servico: string, preco: string) => {
    const message = `Olá! Gostaria de saber mais sobre o serviço de ${servico} no valor de ${preco}.`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Catálogo Completo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Confira nossa tabela de preços atualizada. Alta qualidade e estética premium para o seu veículo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border-primary/20 shadow-lg overflow-hidden">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl">Estética Automotiva e Cuidado Premium</CardTitle>
                  <CardDescription className="text-base mt-1">
                    Serviços avulsos para renovar e proteger o seu carro
                  </CardDescription>
                </div>
                <Tag className="w-10 h-10 text-primary/40 hidden sm:block" />
              </div>
            </CardHeader>
            
            <CardContent className="p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-x-12 gap-y-6">
                {servicos.map((servico) => {
                  const precoFormatado = formatPrice(servico.preco)
                  return (
                    <div key={servico.codigo} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 group border-b border-border/50 border-dashed pb-4">
                      
                      <div className="flex items-center gap-3">
                        <div className="relative flex-shrink-0 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
                        </div>
                        <span className="font-medium text-sm md:text-base text-foreground/80 group-hover:text-foreground">
                          {servico.nome}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between sm:justify-end gap-4 ml-8 sm:ml-0 mt-2 sm:mt-0">
                        <span className="text-sm md:text-base font-bold whitespace-nowrap text-muted-foreground group-hover:text-primary transition-colors">
                          {precoFormatado}
                        </span>
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground h-8 px-4 text-xs font-semibold shadow-sm shrink-0"
                          onClick={() => handleWhatsAppClick(servico.nome, precoFormatado)}
                        >
                          <MessageCircle className="w-3.5 h-3.5 mr-1.5 hidden sm:inline" />
                          Consultar
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}