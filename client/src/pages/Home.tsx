import Layout from "@/components/Layout";
import ReservationForm from "@/components/ReservationForm";
import { Button } from "@/components/ui/button";
import { MapView } from "@/components/Map";
import { Star, Coffee, Heart, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

export default function Home() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [isReservationFormOpen, setIsReservationFormOpen] = useState(false);

  // Coordenadas exactas del Sublime Hotel Boutique desde Google Maps
  const hotelLocation = { lat: -23.4067183, lng: -57.4499155 }; 

  return (
    <>
    <ReservationForm isOpen={isReservationFormOpen} onClose={() => setIsReservationFormOpen(false)} />
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hotel-interior.jpg" 
            alt="Lobby elegante del Sublime Hotel Boutique" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center text-white space-y-6 animate-in fade-in zoom-in duration-1000">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs uppercase tracking-[0.2em] backdrop-blur-sm bg-white/10">
            Concepción, Paraguay
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-tight">
            Experiencia <br/>
            <span className="italic font-light">Sublime</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-xl mx-auto text-white/90 leading-relaxed">
            Donde la elegancia se encuentra con la calidez. Un refugio boutique diseñado para el confort absoluto y la atención personalizada.
          </p>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-serif italic shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              onClick={() => setIsReservationFormOpen(true)}
            >
              Reservar su estadía
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-primary">
                Más que un hotel, <br/>
                <span className="italic text-accent">un hogar lejos de casa</span>
              </h2>
              <div className="w-20 h-1 bg-accent/30 rounded-full" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              En el corazón de Concepción, Sublime Hotel Boutique nace con la visión de redefinir la hospitalidad. No somos solo un lugar para dormir; somos un espacio donde cada detalle ha sido curado para ofrecer una atmósfera de serenidad y exclusividad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Nuestra filosofía se basa en la calidez humana y el confort sin pretensiones. Desde el momento en que cruza nuestras puertas, nuestro equipo se dedica a personalizar su experiencia, asegurando que su estadía sea tan única como usted.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="text-accent w-8 h-8" />
                <h3 className="font-serif text-xl">Seguridad y Confort</h3>
                <p className="text-sm text-muted-foreground">Espacios diseñados para su tranquilidad absoluta.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Heart className="text-accent w-8 h-8" />
                <h3 className="font-serif text-xl">Inclusivo</h3>
                <p className="text-sm text-muted-foreground">Un ambiente acogedor y respetuoso para todos nuestros huéspedes.</p>
              </div>
            </div>
          </div>
          
            <div className="relative order-1 lg:order-2 h-[600px] w-full">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl z-10">
              <img 
                src="/images/room-real.jpg" 
                alt="Habitación confortable" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-xl z-20 border-8 border-background">
              <img 
                src="/images/staircase.jpg" 
                alt="Escalera elegante del hotel" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent uppercase tracking-widest text-sm font-bold">Nuestra Promesa</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">Una Experiencia Sublime</h2>
            <p className="text-muted-foreground text-lg font-light">
              Cada aspecto de su estadía ha sido pensado para deleitar sus sentidos y elevar su espíritu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              <div className="h-64 overflow-hidden">
              <img 
                src="/images/breakfast-real.jpg" 
                alt="Desayuno gourmet" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              </div>
              <div className="p-8 space-y-4">
                <Coffee className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-serif text-primary">Desayuno Excepcional</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Comience su día con productos frescos, variados y de la más alta calidad. Una experiencia culinaria que nuestros huéspedes no dejan de elogiar.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/hotel-interior.jpg" 
                  alt="Servicio personalizado" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-4">
                <Star className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-serif text-primary">Servicio Personalizado</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Nuestro personal está dedicado a anticipar sus necesidades. La amabilidad y la atención al detalle son el sello de nuestra casa.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/staircase.jpg" 
                  alt="Ambiente elegante" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-4">
                <MapPin className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-serif text-primary">Ambiente y Diseño</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Espacios que respiran elegancia y confort. Cada rincón está diseñado para ofrecer una atmósfera de paz y sofisticación inigualable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-background relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent uppercase tracking-widest text-sm font-bold">Comodidades</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">Amenidades Completas</h2>
            <p className="text-muted-foreground text-lg font-light">
              Contamos con todas las comodidades para que su estadía sea perfecta.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* WiFi */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-border/50 hover:border-accent/30 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">WiFi Gratis</h3>
              <p className="text-sm text-muted-foreground font-light">Conexión de alta velocidad en todas las áreas</p>
            </div>

            {/* Breakfast */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-border/50 hover:border-accent/30 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M6 3h12c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z" />
                  <path d="M9 8h6M9 11h6M9 14h3" />
                  <circle cx="18" cy="14" r="1.5" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">Desayuno Incluido</h3>
              <p className="text-sm text-muted-foreground font-light">Variado, fresco y de alta calidad</p>
            </div>

            {/* Air Conditioning */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-border/50 hover:border-accent/30 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3 7h18c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1z" />
                  <path d="M6 11v2M10 11v2M14 11v2M18 11v2" />
                  <path d="M5 18h14" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">Aire Acondicionado</h3>
              <p className="text-sm text-muted-foreground font-light">Clima controlado en todas las habitaciones</p>
            </div>

            {/* TV Cable */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-border/50 hover:border-accent/30 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7l6-4v8l-6-4z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">TV por Cable</h3>
              <p className="text-sm text-muted-foreground font-light">Entretenimiento en todas las habitaciones</p>
            </div>

            {/* Safe */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-border/50 hover:border-accent/30 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">Caja de Seguridad</h3>
              <p className="text-sm text-muted-foreground font-light">Protección para sus valores</p>
            </div>

            {/* Minibar */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-border/50 hover:border-accent/30 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-1V1h-2v1h-2V1h-2v1h-2V1H8v1H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V7h11v13z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">Frigobar</h3>
              <p className="text-sm text-muted-foreground font-light">Bebidas y snacks disponibles</p>
            </div>

            {/* Parking */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/40 transition-colors border border-border/50 hover:border-accent/30 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">Estacionamiento</h3>
              <p className="text-sm text-muted-foreground font-light">Amplio y cubierto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
           <div className="absolute left-0 bottom-0 w-64 h-64 bg-accent rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent-foreground">
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6" />
                <span className="ml-2 text-xl font-bold">5.0</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif">Lo que dicen nuestros huéspedes</h2>
            </div>
            <a 
              href="https://www.google.com/maps/place/Sublime+Hotel+Boutique/@-23.4067181,-57.4562472,16z/data=!4m11!1m2!2m1!1shotel!3m7!1s0x94669d0011846e95:0x802cc7167d5315d4!8m2!3d-23.4067183!4d-57.4499155!9m1!1b1!16s%2Fg%2F11yj9t1l2d?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-white flex items-center gap-2 border-b border-transparent hover:border-white transition-all pb-1"
            >
              Ver todas las reseñas en Google <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-lg font-serif italic mb-6 text-primary-foreground/90">
                "Desayuno excepcional, fresco, variado y de alta calidad. La atención del personal es inmejorable, te hacen sentir en casa desde el primer momento."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-white">
                  M
                </div>
                <div>
                  <p className="font-bold text-sm">María González</p>
                  <p className="text-xs text-primary-foreground/60">Huésped verificado</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-lg font-serif italic mb-6 text-primary-foreground/90">
                "Ambiente elegante, cuidado hasta el último detalle. Excelente relación precio-calidad. Sin duda el mejor lugar para hospedarse en Concepción."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-white">
                  J
                </div>
                <div>
                  <p className="font-bold text-sm">Juan Pérez</p>
                  <p className="text-xs text-primary-foreground/60">Huésped verificado</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-lg font-serif italic mb-6 text-primary-foreground/90">
                "Sensación de confort, calidez y exclusividad. Me encantó que sea un lugar tan inclusivo y respetuoso. Volveré sin dudarlo."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-white">
                  A
                </div>
                <div>
                  <p className="font-bold text-sm">Ana Rodríguez</p>
                  <p className="text-xs text-primary-foreground/60">Huésped verificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent uppercase tracking-widest text-sm font-bold">Tarifas</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">Nuestras Tarifas</h2>
            <p className="text-muted-foreground text-lg font-light">
              Opciones de alojamiento diseñadas para cada tipo de huésped, con la mejor relación precio-calidad.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-accent">
                  <th className="text-left py-4 px-6 font-serif text-lg text-primary">Tipo de Habitación</th>
                  <th className="text-center py-4 px-6 font-serif text-lg text-primary">Capacidad</th>
                  <th className="text-center py-4 px-6 font-serif text-lg text-primary">Amenidades</th>
                  <th className="text-right py-4 px-6 font-serif text-lg text-primary">Tarifa/Noche</th>
                </tr>
              </thead>
              <tbody>
                {/* Single Room */}
                <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                  <td className="py-6 px-6">
                    <div className="space-y-1">
                      <p className="font-serif text-lg text-primary">Single</p>
                      <p className="text-sm text-muted-foreground">Cama matrimonial</p>
                    </div>
                  </td>
                  <td className="text-center py-6 px-6 text-foreground">1 Persona</td>
                  <td className="text-center py-6 px-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded">WiFi</span>
                      <span className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded">A/C</span>
                      <span className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded">TV</span>
                      <span className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded">Frigobar</span>
                    </div>
                  </td>
                  <td className="text-right py-6 px-6">
                    <p className="font-serif text-xl text-accent">Gs. 300.000</p>
                    <p className="text-xs text-muted-foreground">Inc. Desayuno</p>
                  </td>
                </tr>

                {/* Double Room */}
                <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                  <td className="py-6 px-6">
                    <div className="space-y-1">
                      <p className="font-serif text-lg text-primary">Doble o Matrimonial</p>
                      <p className="text-sm text-muted-foreground">Cama matrimonial premium</p>
                    </div>
                  </td>
                  <td className="text-center py-6 px-6 text-foreground">2 Personas</td>
                  <td className="text-center py-6 px-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded">WiFi</span>
                      <span className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded">A/C</span>
                      <span className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded">TV</span>
                      <span className="text-xs bg-secondary/50 text-foreground px-2 py-1 rounded">Frigobar</span>
                    </div>
                  </td>
                  <td className="text-right py-6 px-6">
                    <p className="font-serif text-xl text-accent">Gs. 400.000</p>
                    <p className="text-xs text-muted-foreground">Inc. Desayuno</p>
                  </td>
                </tr>

                {/* Suite Sublime */}
                <tr className="border-b border-border hover:bg-secondary/30 transition-colors bg-secondary/10">
                  <td className="py-6 px-6">
                    <div className="space-y-1">
                      <p className="font-serif text-lg text-primary">Suite Sublime</p>
                      <p className="text-sm text-muted-foreground">Máximo confort y lujo</p>
                    </div>
                  </td>
                  <td className="text-center py-6 px-6 text-foreground">2-3 Personas</td>
                  <td className="text-center py-6 px-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs bg-accent/20 text-foreground px-2 py-1 rounded">WiFi</span>
                      <span className="text-xs bg-accent/20 text-foreground px-2 py-1 rounded">A/C</span>
                      <span className="text-xs bg-accent/20 text-foreground px-2 py-1 rounded">TV</span>
                      <span className="text-xs bg-accent/20 text-foreground px-2 py-1 rounded">Frigobar</span>
                    </div>
                  </td>
                  <td className="text-right py-6 px-6">
                    <p className="font-serif text-xl text-accent">Gs. 500.000</p>
                    <p className="text-xs text-muted-foreground">Inc. Desayuno</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-8 bg-secondary/20 rounded-xl border border-border/50 space-y-4">
            <h3 className="font-serif text-xl text-primary">Notas Importantes</h3>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Todas las tarifas incluyen desayuno buffet excepcional y acceso a WiFi de alta velocidad.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Estacionamiento amplio y cubierto incluido sin costo adicional.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Para reservas especiales o grupos, contáctanos directamente a contacto.hotelsublime@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-secondary/20">        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="p-12 lg:p-24 flex flex-col justify-center space-y-8 bg-secondary/20">
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-widest text-sm font-bold">Ubicación Privilegiada</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary">En el corazón de Concepción</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">Dirección</h4>
                  <p className="text-muted-foreground">Calle Brasil esq. Concepción 010107<br/>Concepción, Paraguay</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">Cerca de todo</h4>
                  <p className="text-muted-foreground">A pasos de los mejores restaurantes, cafés y puntos de interés cultural de la ciudad.</p>
                </div>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-fit mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${hotelLocation.lat},${hotelLocation.lng}`, '_blank')}
            >
              Cómo llegar
            </Button>
          </div>
          
          <div className="h-[400px] lg:h-auto w-full bg-muted relative">
             <MapView 
                className="w-full h-full"
                initialCenter={hotelLocation}
                initialZoom={15}
                onMapReady={(map) => {
                  mapRef.current = map;
                  new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: hotelLocation,
                    title: "Sublime Hotel Boutique"
                  });
                }}
             />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-background text-center">
        <div className="container max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-primary">¿Listo para una estadía inolvidable?</h2>
          <p className="text-lg text-muted-foreground font-light">
            Permítanos ser parte de su historia en Concepción. Reserve hoy y asegure su lugar en nuestro oasis de tranquilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-lg font-serif italic shadow-lg"
              onClick={() => setIsReservationFormOpen(true)}
            >
              Reservar Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-secondary rounded-full px-10 py-6 text-lg"
              onClick={() => window.open('https://instagram.com/sublimehotelboutique', '_blank')}
            >
              Ver Instagram
            </Button>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
}
