import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo e Nome */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <Image
              src="/logo.jpeg"
              alt="Logo Esdras Palheta"
              width={48}
              height={48}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col items-center md:items-start">
              <p className="text-primary font-bold text-lg">Esdras Palheta</p>
              <p className="text-sm text-muted-foreground">Consultor de Vendas - Estética Automotiva</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#peliculas" className="text-muted-foreground hover:text-primary transition-colors">
              Películas
            </a>
            <a href="#ppf" className="text-muted-foreground hover:text-primary transition-colors">
              PPF
            </a>
            <a href="#revestimento" className="text-muted-foreground hover:text-primary transition-colors">
              Revestimento
            </a>
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}