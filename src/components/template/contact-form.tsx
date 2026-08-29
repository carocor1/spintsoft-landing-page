"use client";

import { useState } from "react";
import { CheckIcon, SendIcon, MailIcon, CopyIcon, CheckCheckIcon, ExternalLinkIcon, SparklesIcon } from "lucide-react";
import { SiGmail } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { confettiBurst } from "@/components/velora/confetti";
import { siteConfig } from "@/lib/site-config";

const paletteColors = ["#577590", "#f3ca40", "#f2a541", "#f08a4b", "#d78a76"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailSubject = formData.subject || `Consulta de ${formData.name || "Cliente"} para Spintsoft`;
  const emailBody = `Hola Spintsoft,\n\nMi nombre es: ${formData.name}\nMi email de contacto: ${formData.email}\n\nDetalle de la consulta / proyecto:\n${formData.message}\n\nSaludos!`;

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    siteConfig.email
  )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyBody = () => {
    navigator.clipboard.writeText(emailBody);
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti with our brand colors
    confettiBurst({
      count: 100,
      colors: paletteColors,
    });

    setSent(true);

    // Automatically attempt to open Gmail web in a new tab
    try {
      window.open(gmailWebUrl, "_blank", "noopener,noreferrer");
    } catch {
      window.location.href = mailtoUrl;
    }
  };

  if (sent) {
    return (
      <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-3xl border border-border/80 bg-card p-6 md:p-8 text-center shadow-lg">
        <span className="flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 shadow-xs">
          <CheckIcon className="size-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-foreground">¡Tu mensaje está listo para enviar!</h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground leading-relaxed">
          Elegí cómo preferís despacharlo hacia <strong className="text-foreground">{siteConfig.email}</strong>:
        </p>

        <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full max-w-md">
          <Button
            className="w-full sm:w-auto rounded-full bg-red-600 hover:bg-red-700 text-white shadow-sm font-semibold text-xs"
            onClick={() => window.open(gmailWebUrl, "_blank", "noopener,noreferrer")}
          >
            <SiGmail className="size-4 mr-2" />
            Abrir en Gmail Web
          </Button>

          <Button
            className="w-full sm:w-auto rounded-full bg-[#577590] hover:bg-[#435b71] text-white shadow-sm font-semibold text-xs"
            onClick={() => { window.location.href = mailtoUrl; }}
          >
            <MailIcon className="size-4 mr-2" />
            Abrir en App de Correo
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto rounded-full text-xs"
            onClick={handleCopyBody}
          >
            {copiedBody ? (
              <>
                <CheckCheckIcon className="size-3.5 mr-1.5 text-emerald-600" />
                ¡Mensaje Copiado!
              </>
            ) : (
              <>
                <CopyIcon className="size-3.5 mr-1.5" />
                Copiar texto del mensaje
              </>
            )}
          </Button>
        </div>

        <Button
          variant="ghost"
          className="mt-6 rounded-full text-xs text-muted-foreground hover:text-foreground"
          onClick={() => {
            setSent(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
        >
          Escribir otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-border/80 bg-card/90 p-6 md:p-8 shadow-xl backdrop-blur-sm"
      onSubmit={handleSubmit}
    >
      <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">
            Contanos qué necesitás
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            No hace falta que tengas el proyecto definido. Contanos qué problema querés resolver y nosotros te ayudamos a encontrar la solución.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-xs font-semibold text-foreground">
            Nombre y Apellido / Organización
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Ej: Martín Rodríguez"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="rounded-xl"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-xs font-semibold text-foreground">
            Tu Correo Electrónico
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="martin@empresa.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        <Label htmlFor="subject" className="text-xs font-semibold text-foreground">
          ¿Qué necesitás?
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Ej: Quiero un sistema para gestionar stock y ventas"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="rounded-xl"
        />
      </div>

      <div className="mt-4 grid gap-2">
        <Label htmlFor="message" className="text-xs font-semibold text-foreground">
          Contanos un poco más
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="¿Qué problema tenés actualmente? ¿Cómo lo resolvés hoy?"
          className="min-h-32 rounded-xl text-sm leading-relaxed"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:flex-1 rounded-full bg-[#577590] hover:bg-[#435b71] text-white shadow-md font-semibold text-sm transition-transform active:scale-[0.98]"
        >
          <SendIcon className="size-4 mr-2" />
          Enviar consulta
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-3">
        <span>¿Preferís escribirnos directamente? <strong className="text-foreground">{siteConfig.email}</strong></span>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="hover:text-foreground underline transition-colors cursor-pointer flex items-center gap-1"
        >
          {copied ? "¡Copiado!" : "Copiar dirección"}
        </button>
      </div>
    </form>
  );
}
