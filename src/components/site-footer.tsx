import Link from "next/link";
import { Code2Icon, MailIcon, ShieldCheckIcon } from "lucide-react";
import { SiInstagram } from "react-icons/si";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/20 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.6fr_1fr_1.4fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight text-foreground">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#577590] via-[#f2a541] to-[#f08a4b] text-white">
              <Code2Icon className="size-4.5" />
            </span>
            <span className="text-lg font-extrabold">
              Spint<span className="text-[#f08a4b]">soft</span>
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Desarrollamos software a medida y sistemas de gestión para transformar y automatizar organizaciones.
          </p>
          <p className="mt-4 text-xs font-medium text-muted-foreground flex items-center gap-1.5">
            <ShieldCheckIcon className="size-4 text-[#577590]" />
            Software para tu negocio
          </p>
        </div>

        <nav aria-label="Navegación">
          <h4 className="text-sm font-bold text-foreground">Navegación</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="#demos" className="transition-colors hover:text-foreground">
                Demos de Sistemas
              </a>
            </li>
            <li>
              <a href="#sintomas" className="transition-colors hover:text-foreground">
                ¿Por qué un sistema?
              </a>
            </li>
            <li>
              <a href="#beneficios" className="transition-colors hover:text-foreground">
                Beneficios
              </a>
            </li>
            <li>
              <a href="#nosotros" className="transition-colors hover:text-foreground">
                Quiénes Somos
              </a>
            </li>
            <li>
              <a href="#contacto" className="transition-colors hover:text-foreground">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h4 className="text-sm font-bold text-foreground">Canales Oficiales</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Escribinos o seguinos en nuestras redes:
          </p>
          <div className="mt-3 flex flex-col gap-2.5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 rounded-xl border border-[#577590]/30 bg-[#577590]/10 px-4 py-2 text-xs font-semibold text-[#577590] shadow-xs hover:bg-[#577590]/20 hover:border-[#577590] transition-colors w-fit"
            >
              <MailIcon className="size-4 text-[#577590]" />
              {siteConfig.email}
            </a>

            <a
              href="https://instagram.com/spintsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-[#f08a4b]/30 bg-[#f08a4b]/10 px-4 py-2 text-xs font-semibold text-[#f08a4b] shadow-xs hover:bg-[#f08a4b]/20 hover:border-[#f08a4b] transition-colors w-fit"
            >
              <SiInstagram className="size-4 text-[#f08a4b]" />
              @spintsoft
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border/50 px-4 pt-6 text-xs text-muted-foreground md:flex-row lg:px-8">
        <span>© {new Date().getFullYear()} Spintsoft. Todos los derechos reservados.</span>
        <span>Villa María, Córdoba · Software a Medida</span>
      </div>
    </footer>
  );
}
