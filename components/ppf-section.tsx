"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
  ShieldCheck,
  Car,
  CheckCircle2,
  Tag,
  MessageCircle,
} from "lucide-react"

const WHATSAPP_NUMBER = "5598981896562"

const pacoteEspecifico = [
  { name: "1 CAPO (porta)", price: 3000 },
  { name: "1 PARA CHOQUE", price: 4100 },
  { name: "2 PARALAMAS", price: 2900 },
  { name: "2 RETROVISORES", price: 1200 },
  { name: "2 FAROES", price: 1400 },
  { name: "4 COLUNAS", price: 900 },
  { name: "8 COLUNAS", price: 1800 },
  { name: "2 LANTERNAS", price: 1350 },
  { name: "SOLEIRAS 4 PORTAS", price: 1150 },
  { name: "SOLEIRAS 2 PORTAS", price: 900 },
  { name: "TELA MIDIA TERCEIRO INSTALANDO", price: 1600 },
  { name: "PPF TETO", price: 2000 },
  { name: "PPF TETO BLACK PIANO", price: 2000 },
  { name: "PPF TELA", price: 750 },
]

const ppfPrecos = [
  { tamanho: "P", descricao: "Veículos Pequenos", preco: 16500 },
  { tamanho: "M", descricao: "Veículos Médios", preco: 19500 },
  { tamanho: "G", descricao: "Veículos Grandes", preco: 23500 },
  { tamanho: "GG", descricao: "SUVs e Picapes", preco: 26000 },
]

export function PPFSection() {

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const handleWhatsAppClick = (mensagem: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      mensagem
    )}`

    window.open(url, "_blank")
  }

  return (
    <section id="ppf" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">

          <Badge
            variant="outline"
            className="mb-4 border-primary text-primary"
          >
            Proteção Máxima
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            PPF - Paint Protection Film
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A armadura invisível para a pintura do seu veículo.
            Escolha a proteção ideal para as áreas críticas ou
            proteção total da carroceria.
          </p>
        </div>

        <div className="mb-20 max-w-5xl mx-auto">

          <Card className="border-primary/20 shadow-xl overflow-hidden">

            <CardHeader className="bg-primary/5 border-b border-primary/10">

              <div className="flex justify-between items-center">

                <div>

                  <CardTitle className="text-2xl flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />

                    Proteção Frontal + Áreas Críticas
                  </CardTitle>

                  <CardDescription className="text-base mt-1">
                    Escolha individualmente os itens que deseja proteger
                    com aplicação premium de PPF.
                  </CardDescription>
                </div>

                <Tag className="w-10 h-10 text-primary/40 hidden sm:block" />
              </div>
            </CardHeader>

            <CardContent className="p-6 md:p-8">

              <div className="flex flex-col gap-5">

                {pacoteEspecifico.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 group border-b border-border/50 border-dashed pb-4"
                  >

                    <div className="flex items-start gap-3">

                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
                      </div>

                      <span className="font-medium text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 ml-8 sm:ml-0">

                      <span className="text-sm md:text-base font-bold whitespace-nowrap text-muted-foreground group-hover:text-primary transition-colors">
                        {formatCurrency(item.price)}
                      </span>

                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground h-8 px-4 text-xs font-semibold shadow-sm"
                        onClick={() =>
                          handleWhatsAppClick(
                            `Olá! Gostaria de saber mais sobre a aplicação de PPF em ${item.name} no valor de ${formatCurrency(item.price)}.`
                          )
                        }
                      >
                        <MessageCircle className="w-3.5 h-3.5 mr-1.5 hidden sm:inline" />
                        Consultar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">

          <div className="text-center mb-8">

            <h3 className="text-2xl font-bold">
              PPF Full (Carroceria Completa)
            </h3>

            <p className="text-muted-foreground mt-2">
              Proteção completa para todo o veículo conforme a categoria.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {ppfPrecos.map((item) => (
              <Card
                key={item.tamanho}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 text-center shadow-sm hover:shadow-lg"
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

                    <span className="text-sm text-muted-foreground">
                      A partir de
                    </span>

                    <div className="flex items-baseline justify-center gap-1 mt-1">

                      <span className="text-sm text-primary">
                        R$
                      </span>

                      <span className="text-3xl font-bold text-primary">
                        {item.preco.toLocaleString("pt-BR")}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() =>
                      handleWhatsAppClick(
                        `Olá! Gostaria de saber mais sobre o PPF Full para veículo ${item.tamanho} (${item.descricao}).`
                      )
                    }
                  >
                    Consultar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}