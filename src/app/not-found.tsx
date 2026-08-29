import Link from "next/link";
import { HomeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { AnimatedGradientText } from "@/components/velora/animated-gradient-text";

export default function NotFound() {
  return (
    <main className="relative bg-background text-foreground">
      <SiteHeader />
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-4">
        <div className="relative mx-auto max-w-xl py-32 text-center">
          <BlurFade>
            <p className="font-mono text-8xl font-extrabold tracking-tight lg:text-9xl text-foreground">
              <AnimatedGradientText>404</AnimatedGradientText>
            </p>
            <h1 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Página no encontrada
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
              La página que estás buscando no existe o fue movida.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button size="lg" className="rounded-full bg-[#577590] hover:bg-[#435b71] text-white" asChild>
                <Link href="/">
                  <HomeIcon className="size-4 mr-2" />
                  Volver al inicio
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
