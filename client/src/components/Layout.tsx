import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Experiencia", href: "#experience" },
    { name: "Reseñas", href: "#reviews" },
    { name: "Ubicación", href: "#location" },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
          isScrolled
            ? "bg-background/95 backdrop-blur-md py-4 shadow-sm border-border/40"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-serif font-bold tracking-tighter text-primary hover:opacity-80 transition-opacity">
              Sublime<span className="text-foreground font-light">Hotel</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors uppercase text-muted-foreground"
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-serif italic"
              onClick={() => scrollToSection("#contact")}
            >
              Reservar Ahora
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-lg font-medium py-2 border-b border-border/50 last:border-0"
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="w-full mt-4 bg-primary text-primary-foreground font-serif italic"
              onClick={() => scrollToSection("#contact")}
            >
              Reservar Ahora
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16" id="contact">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Sublime Hotel Boutique</h3>
            <p className="text-primary-foreground/80 max-w-xs font-light leading-relaxed">
              Una experiencia de elegancia, calidez y confort en el corazón de Concepción.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold">Contacto</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/80">
              <a href="tel:+595987488884" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={18} /> +595 987 488 884
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram size={18} /> @sublimehotel
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>Calle Brasil esq. Concepción 010107<br/>Concepción, Paraguay</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold">Enlaces Rápidos</h4>
            <div className="flex flex-col gap-2 text-primary-foreground/80">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left hover:text-white transition-colors w-fit"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Sublime Hotel Boutique. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
