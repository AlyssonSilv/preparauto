"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
  const handleWhatsAppClick = (servico: string) => {
    const message = `Olá! Gostaria de saber mais sobre o serviço: ${servico}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Catálogo Completo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Confira nossa tabela de preços atualizada para cliente final
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50 hover:bg-secondary/50">
                  <TableHead className="text-foreground font-semibold">Serviço</TableHead>
                  <TableHead className="text-foreground font-semibold text-center hidden sm:table-cell">Código</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">Valor</TableHead>
                  <TableHead className="text-foreground font-semibold text-center w-32"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {servicos.map((servico, index) => (
                  <TableRow 
                    key={servico.codigo}
                    className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}
                  >
                    <TableCell className="font-medium text-foreground">
                      {servico.nome}
                    </TableCell>
                    <TableCell className="text-center text-muted-foreground hidden sm:table-cell">
                      {servico.codigo}
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="text-primary font-semibold">
                        {formatPrice(servico.preco)}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs"
                        onClick={() => handleWhatsAppClick(servico.nome)}
                      >
                        Consultar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Valores para venda final ao cliente. Consulte condições especiais para frotas.
        </p>
      </div>
    </section>
  )
}
