"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DumbbellIcon,
  HouseIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { BorderBeam } from "@/components/velora/border-beam";
import { BlurFade } from "@/components/velora/blur-fade";
import { cn } from "@/lib/utils";

const demos = [
  {
    id: "ecommerce",
    name: "E-commerce",
    domain: "spintsoft-demo-ecommerce.web.app",
    url: "https://spintsoft-demo-ecommerce.web.app/",
    icon: ShoppingBagIcon,
    image: "/demos/ecommerce.png",
    imageAlt: "Captura de pantalla de la tienda online SpintSoft",
    title: "Una tienda online lista para vender",
    description:
      "Una experiencia de compra completa: catálogo de productos, búsqueda, favoritos y carrito, con una identidad visual cuidada de punta a punta.",
    features: ["Catálogo y colecciones", "Búsqueda de productos", "Favoritos y carrito"],
  },
  {
    id: "inmobiliaria",
    name: "Inmobiliaria",
    domain: "spintsoft-demo-inmobiliaria.web.app",
    url: "https://spintsoft-demo-inmobiliaria.web.app/",
    icon: HouseIcon,
    image: "/demos/inmobiliaria.png",
    imageAlt: "Captura de pantalla de la landing inmobiliaria SpintSoft",
    title: "Propiedades que se lucen desde el primer vistazo",
    description:
      "Una landing para presentar propiedades y proyectos, facilitar la búsqueda y conectar a potenciales compradores o inquilinos con el equipo.",
    features: ["Propiedades y proyectos", "Búsqueda por necesidad", "Contacto directo"],
  },
  {
    id: "gimnasio",
    name: "Gimnasio",
    domain: "spintsoft-demo-gym.web.app",
    url: "https://spintsoft-demo-gym.web.app/",
    icon: DumbbellIcon,
    image: "/demos/gimnasio.png",
    imageAlt: "Captura de pantalla del sistema de agenda para gimnasio FitGirl",
    title: "La gestión diaria del gimnasio, en un solo lugar",
    description:
      "Un sistema de gestión para organizar clases y turnos, consultar disponibilidad, hacer seguimiento del rendimiento y administrar pagos.",
    features: ["Agenda de clases", "Turnos y disponibilidad", "Rendimiento y pagos"],
  },
];

export function DemosCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentDemo = demos[activeIndex];
  const Icon = currentDemo.icon;

  const previous = () =>
    setActiveIndex((index) => (index === 0 ? demos.length - 1 : index - 1));
  const next = () =>
    setActiveIndex((index) => (index === demos.length - 1 ? 0 : index + 1));

  return (
    <BlurFade delay={0.15}>
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-5 shadow-xl backdrop-blur-sm sm:p-7 lg:p-8">
        <BorderBeam size={120} duration={9} />

        <div className="mb-5 flex flex-wrap items-center justify-center gap-2 sm:mb-7">
          {demos.map((demo, index) => {
            const TabIcon = demo.icon;
            const active = activeIndex === index;
            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={active}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all",
                  active
                    ? "border-[#577590] bg-[#577590] text-white shadow-md"
                    : "border-border/70 bg-card text-muted-foreground hover:border-[#577590]/40 hover:text-foreground",
                )}
              >
                <TabIcon className="size-3.5" />
                {demo.name}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentDemo.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid items-center gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-9"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#577590]/12 text-[#577590]">
                  <Icon className="size-4" />
                </span>
                Demo {activeIndex + 1} de {demos.length}
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {currentDemo.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {currentDemo.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentDemo.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-border/70 bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href={currentDemo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#577590] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#435b71]"
              >
                Explorar demo
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>

            <a
              href={currentDemo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir demo de ${currentDemo.name} en una nueva pestaña`}
              className="group block min-w-0 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#577590] focus-visible:ring-offset-4"
            >
              <BrowserMockup
                url={currentDemo.domain}
                className="shadow-xl transition-shadow group-hover:shadow-2xl"
              >
                <div className="relative aspect-[1894/822] overflow-hidden bg-background">
                  <Image
                    src={currentDemo.image}
                    alt={currentDemo.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-contain object-center"
                    // Preload each small local screenshot so switching demos is instant.
                    preload={activeIndex === 0}
                    loading={activeIndex === 0 ? "eager" : "lazy"}
                    fetchPriority={activeIndex === 0 ? "high" : "auto"}
                  />
                </div>
              </BrowserMockup>
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-5">
          <div className="flex items-center gap-1.5" role="group" aria-label="Elegir demo">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir a demo ${index + 1}: ${demo.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={cn(
                  "h-2 cursor-pointer rounded-full transition-all",
                  index === activeIndex
                    ? "w-8 bg-[#577590]"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-9 rounded-full border-border/80"
              onClick={previous}
              aria-label="Demo anterior"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-9 rounded-full border-border/80"
              onClick={next}
              aria-label="Siguiente demo"
            >
              <ChevronRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
