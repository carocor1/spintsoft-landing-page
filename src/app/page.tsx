"use client";

import {
  BoxesIcon,
  ClockIcon,
  Code2Icon,
  ExternalLinkIcon,
  HeartIcon,
  MailIcon,
  MapPinIcon,
  RocketIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import { SiInstagram } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DemosCarousel } from "@/components/demo/demos-carousel";
import { SymptomsAnimatedList } from "@/components/demo/symptoms-animated-list";
import { TechMarquee } from "@/components/demo/tech-marquee";
import { ProductsCurvedCarousel } from "@/components/demo/products-curved-carousel";
import { ContactForm } from "@/components/template/contact-form";
import { AnimatedGradientText } from "@/components/velora/animated-gradient-text";
import { AnimatedTooltip } from "@/components/velora/animated-tooltip";
import { AuroraBackground } from "@/components/velora/aurora-background";
import { BlurFade } from "@/components/velora/blur-fade";
import { BorderBeam } from "@/components/velora/border-beam";
import { GridPattern, DotPattern } from "@/components/velora/grid-pattern";
import { Particles } from "@/components/velora/particles";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { TextReveal } from "@/components/velora/text-reveal";
import { TiltCard } from "@/components/velora/tilt-card";
import { Typewriter } from "@/components/velora/typewriter";
import { siteConfig } from "@/lib/site-config";

const basePath =
  process.env.GITHUB_ACTIONS === "";

const teamMembers = [
  {
    name: "Juan Saby",
    role: "Ingeniería en Sistemas",
    image: `${basePath}/resources/juan.jpg`,
  },
  {
    name: "Carolina Corazza",
    role: "Ingeniería en Sistemas",
    image: `${basePath}/resources/carolina.jpg`,
  },
  {
    name: "Belén Ramello",
    role: "Ingeniería en Sistemas",
    image: `${basePath}/resources/belen.jpg`,
  },
];
export default function Home() {
  return (
    <main className="relative bg-background text-foreground selection:bg-[#f2a541]/30 selection:text-[#577590]">
      <ScrollProgress />
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
        <AuroraBackground intensity="subtle" />
        <GridPattern
          width={44}
          height={44}
          className="fill-transparent stroke-border/50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        />

        <div className="relative mx-auto max-w-6xl px-4 text-center lg:px-8">
          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl text-foreground">
            <TextReveal text="Transformamos tus " />{" "}
            <AnimatedGradientText>
              <span className="inline-flex min-w-[280px] sm:min-w-[340px] justify-center text-[#f08a4b]">
                <Typewriter
                  words={[
                    "ideas de negocio",
                    "procesos manuales",
                    "tareas repetitivas",
                    "cuellos de botella",
                  ]}
                />
              </span>
            </AnimatedGradientText>
            <TextReveal text=" en software a medida." />
          </h1>

          <BlurFade delay={0.25}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
              Diseñamos sistemas de información personalizados para empresas y organizaciones que buscan centralizar su gestión, eliminar tareas mecánicas y operar con tecnología de vanguardia.
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <ShimmerButton
                className="bg-[#577590] text-white shadow-md text-sm font-semibold"
                onClick={() => {
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <RocketIcon className="size-4 mr-1.5" />
                Hablemos de tu proyecto
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-border/80 bg-card text-foreground hover:bg-muted font-medium text-sm shadow-xs"
                asChild
              >
                <a href="#demos">
                  <BoxesIcon className="size-4 mr-1.5 text-[#577590]" />
                  Ver Demos de Sistemas
                </a>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Demos ── */}
      <section id="demos" className="relative py-20 lg:py-28 border-t border-border/40">
        <DotPattern className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f2a541]/15 border border-[#f2a541]/30 px-3.5 py-1 text-xs font-semibold text-[#f2a541]">
                <BoxesIcon className="size-3.5" />
                Demostraciones Interactivas
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Mirá lo que podemos <span className="text-[#577590]">construir para vos</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                No partimos desde cero: explorá nuestras demos funcionales de sistemas de gestión, flujos automatizados, portales y dashboards para entender cómo podemos resolver tus desafíos.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.15} className="mt-12">
            <DemosCarousel />
          </BlurFade>
        </div>
      </section>

      {/* ── Síntomas / Por qué un sistema ── */}
      <section id="sintomas" className="relative py-20 lg:py-28 border-t border-border/40 overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <BlurFade direction="right">
            <SymptomsAnimatedList />
          </BlurFade>

          <BlurFade direction="left" delay={0.15}>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f08a4b]/15 border border-[#f08a4b]/30 px-3.5 py-1 text-xs font-semibold text-[#f08a4b]">
                <ClockIcon className="size-3.5" />
                Diagnóstico Organizacional
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-tight">
                ¿Tu negocio creció, pero tus herramientas <span className="text-[#f08a4b]">quedaron atrás?</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Es común comenzar con planillas y chats, pero con el crecimiento la carga manual genera cuellos de botella y desorden. Un sistema a medida transforma esa realidad.
              </p>
              <div className="pt-2">
                <Button className="rounded-full bg-[#577590] hover:bg-[#435b71] text-white text-xs font-semibold shadow-sm transition-transform active:scale-95" asChild>
                  <a href="#contacto">Contanos tu caso y coordinemos una charla</a>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Cartera de Productos / Impacto Real ── */}
      <section id="soluciones" className="relative py-20 lg:py-28 border-t border-border/40 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#577590]/15 border border-[#577590]/30 px-3.5 py-1 text-xs font-semibold text-[#577590]">
                <TrendingUpIcon className="size-3.5" />
                Cartera de Soluciones
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
                Menos tareas manuales. Más control.{" "}
                <span className="text-[#577590]">Más tiempo para hacer crecer tu negocio.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Descubrí las soluciones modulares y escalables que implementamos para potenciar cada área de tu empresa.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} className="mt-12">
            <ProductsCurvedCarousel />
          </BlurFade>
        </div>
      </section>

      {/* ── Quiénes Somos ── */}
      <section id="nosotros" className="relative py-20 lg:py-28 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f2a541]/15 border border-[#f2a541]/30 px-3.5 py-1 text-xs font-semibold text-[#f2a541]">
                <UsersIcon className="size-3.5" />
                Equipo de Desarrollo
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Quiénes <span className="text-[#577590]">Somos</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Somos un equipo de estudiantes de Ingeniería en Sistemas con ganas de crear software que realmente haga la diferencia.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <div className="inline-flex items-center gap-3.5 rounded-full border border-border/80 bg-card px-5 py-2.5 shadow-sm">
                  <AnimatedTooltip items={teamMembers} />
                  <div className="text-left text-xs">
                    <p className="font-bold text-foreground">Juan, Carolina y Belén</p>
                    <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <MapPinIcon className="size-3 text-[#f08a4b]" />
                      Villa María, Córdoba
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* 3 cards con TiltCard + BorderBeam */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <BlurFade delay={0.1}>
              <TiltCard className="h-full">
                <div className="relative group rounded-3xl p-0.5 overflow-hidden h-full">
                  <BorderBeam size={80} duration={6} className="from-[#577590] via-[#f2a541] to-[#f08a4b]" />
                  <SpotlightCard className="h-full p-7 md:p-8 border-border/80 bg-card shadow-sm">
                    <div>
                      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-[#577590]/15 text-[#577590] transition-transform duration-300 group-hover:scale-110">
                        <Code2Icon className="size-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">Desarrollamos a medida</h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Construimos soluciones pensadas para la forma en que trabaja cada negocio.
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              </TiltCard>
            </BlurFade>

            <BlurFade delay={0.2}>
              <TiltCard className="h-full">
                <div className="relative group rounded-3xl p-0.5 overflow-hidden h-full">
                  <BorderBeam size={80} duration={6} className="from-[#f08a4b] via-[#d78a76] to-[#f2a541]" />
                  <SpotlightCard className="h-full p-7 md:p-8 border-border/80 bg-card shadow-sm">
                    <div>
                      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-[#f08a4b]/15 text-[#f08a4b] transition-transform duration-300 group-hover:scale-110">
                        <HeartIcon className="size-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">Trabajamos directamente con vos</h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Hablás con quienes diseñan y desarrollan tu sistema. Sin intermediarios.
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              </TiltCard>
            </BlurFade>

            <BlurFade delay={0.3}>
              <TiltCard className="h-full">
                <div className="relative group rounded-3xl p-0.5 overflow-hidden h-full">
                  <BorderBeam size={80} duration={6} className="from-[#f2a541] via-[#577590] to-[#f08a4b]" />
                  <SpotlightCard className="h-full p-7 md:p-8 border-border/80 bg-card shadow-sm">
                    <div>
                      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-[#f2a541]/15 text-[#f2a541] transition-transform duration-300 group-hover:scale-110">
                        <RocketIcon className="size-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">Tenemos ganas de construir</h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Nos involucramos en cada proyecto y buscamos crear soluciones que puedan crecer con tu negocio.
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              </TiltCard>
            </BlurFade>
          </div>

          {/* Marquee de Tecnologías — directo sobre el fondo */}
          <div className="mt-16 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Stack tecnológico y herramientas que dominamos
            </p>
            <TechMarquee />
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="relative py-20 lg:py-28 border-t border-border/40 overflow-hidden">
        <Particles quantity={40} className="opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-start">
            <BlurFade direction="right">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#577590]/15 border border-[#577590]/30 px-3.5 py-1 text-xs font-semibold text-[#577590]">
                  <MailIcon className="size-3.5" />
                  Contacto Directo
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Hablemos de tu proyecto o idea
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Podés escribirnos a través del formulario o directamente a nuestros canales oficiales de contacto:
                </p>

                <div className="space-y-3.5 pt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center justify-between gap-3.5 rounded-2xl border border-border/70 bg-card p-4 shadow-sm transition-all duration-200 hover:border-[#577590] hover:scale-[1.02] group"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#577590]/15 text-[#577590] transition-colors group-hover:bg-[#577590] group-hover:text-white">
                        <MailIcon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground">Correo electrónico oficial</p>
                        <p className="text-sm font-bold text-foreground mt-0.5">{siteConfig.email}</p>
                      </div>
                    </div>
                    <ExternalLinkIcon className="size-4 text-muted-foreground group-hover:text-foreground transition-colors mr-1" />
                  </a>

                  <a
                    href="https://instagram.com/spintsoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3.5 rounded-2xl border border-border/70 bg-card p-4 shadow-sm transition-all duration-200 hover:border-[#f08a4b] hover:scale-[1.02] group"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#f2a541]/20 via-[#f08a4b]/20 to-[#d78a76]/20 text-[#f08a4b] transition-colors group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white">
                        <SiInstagram className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground">Instagram oficial</p>
                        <p className="text-sm font-bold text-foreground mt-0.5">@spintsoft</p>
                      </div>
                    </div>
                    <ExternalLinkIcon className="size-4 text-muted-foreground group-hover:text-foreground transition-colors mr-1" />
                  </a>
                </div>
              </div>
            </BlurFade>

            <BlurFade direction="left" delay={0.15}>
              <ContactForm />
            </BlurFade>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
