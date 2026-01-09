import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";

interface ReservationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationForm({ isOpen, onClose }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    contacto: "",
    mensaje: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validar campos
      if (!formData.nombre || !formData.apellido || !formData.contacto || !formData.mensaje) {
        toast.error("Por favor completa todos los campos");
        setIsLoading(false);
        return;
      }

      // Enviar email usando FormSubmit (servicio gratuito)
      const form = new FormData();
      form.append("nombre", formData.nombre);
      form.append("apellido", formData.apellido);
      form.append("contacto", formData.contacto);
      form.append("mensaje", formData.mensaje);
      form.append("_captcha", "false");
      form.append("_next", window.location.href);

      const response = await fetch("https://formspree.io/f/xvzzpkyr", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        toast.success("¡Reserva enviada exitosamente! Nos contactaremos pronto.");
        setFormData({ nombre: "", apellido: "", contacto: "", mensaje: "" });
        onClose();
      } else {
        toast.error("Error al enviar la reserva. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar la reserva. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 space-y-6 animate-in fade-in zoom-in duration-300">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-serif text-primary">Reservar</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="apellido" className="text-sm font-medium text-foreground">
                Apellido
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Tu apellido"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contacto" className="text-sm font-medium text-foreground">
              Correo o Teléfono
            </label>
            <input
              type="text"
              id="contacto"
              name="contacto"
              value={formData.contacto}
              onChange={handleChange}
              placeholder="tu@correo.com o +595 987 123 456"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tu reserva, fechas deseadas, preferencias especiales..."
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar Reserva"}
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center">
          Tus datos serán enviados a contacto.hotelsublime@gmail.com
        </p>
      </div>
    </div>
  );
}
