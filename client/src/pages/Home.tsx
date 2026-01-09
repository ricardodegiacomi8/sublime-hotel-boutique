import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapView } from "@/components/Map";
import { Star, Coffee, Heart, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const mapRef = useRef<google.maps.Map | null>(null);

  // Coordenadas aproximadas de Concepción, Paraguay (centro)
  // Ajustar si se tiene la ubicación exacta precisa
  const hotelLocation = { lat: -23.4000, lng: -57.4333 }; 

  return (
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
                <p className="text-sm text-muted-foreground">Un ambiente seguro y amigable con la comunidad LGBTQ+.</p>
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
              href="https://www.google.com/maps" 
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
      </section>

      {/* Location Section */}
      <section id="location" className="py-0 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reservar Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-secondary rounded-full px-10 py-6 text-lg"
              onClick={() => window.open('https://instagram.com', '_blank')}
            >
              Ver Instagram
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
