import Link from "next/link";
import Image from "next/image";
import { SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-xs">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-1 font-bold tracking-tight text-foreground group">
          <Image
            src="/resources/logo-spintsoft.png"
            alt="Logo de Spintsoft"
            width={52}
            height={52}
            className="size-[52px] object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg leading-tight font-extrabold text-foreground tracking-tight">
              Spint<span className="text-[#f08a4b]">soft</span>
            </span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest -mt-0.5">
              Software a Medida
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#demos" className="transition-colors hover:text-foreground">
            Demos
          </a>
          <a href="#sintomas" className="transition-colors hover:text-foreground">
            ¿Por qué un sistema?
          </a>
          <a href="#soluciones" className="transition-colors hover:text-foreground">
            Soluciones
          </a>
          <a href="#nosotros" className="transition-colors hover:text-foreground">
            Quiénes Somos
          </a>
          <a href="#contacto" className="transition-colors hover:text-foreground">
            Contacto
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm" className="rounded-full bg-[#577590] hover:bg-[#435b71] text-white shadow-sm" asChild>
            <a href="#contacto">
              <SendIcon className="size-3.5 mr-1" />
              Escribinos
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
