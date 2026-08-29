"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  FileSpreadsheetIcon,
  MessageSquareWarningIcon,
  ClockAlertIcon,
  SearchXIcon,
  FlameIcon,
  AlertTriangleIcon,
  BombIcon,
  ZapOffIcon,
} from "lucide-react";

import { BorderBeam } from "@/components/velora/border-beam";
import { cn } from "@/lib/utils";

const symptoms = [
  {
    title: "Demasiados Excel",
    quote: "“Tenemos un Excel para cada cosa.”",
    description: "Información duplicada, desactualizada y difícil de controlar.",
    icon: FileSpreadsheetIcon,
    badge: "Versiones desfasadas",
    color: "bg-red-500/15 text-red-600 border-red-500/30",
    glowColor: "group-hover:shadow-red-500/20",
  },
  {
    title: "Pedidos y ventas por WhatsApp",
    quote: "“¿Dónde estaba ese presupuesto?”",
    description: "Pedidos, consultas y presupuestos perdidos entre mensajes.",
    icon: MessageSquareWarningIcon,
    badge: "Mensajes enterrados",
    color: "bg-red-500/15 text-red-600 border-red-500/30",
    glowColor: "group-hover:shadow-red-500/20",
  },
  {
    title: "Tareas manuales y repetitivas",
    quote: "“Perdemos horas haciendo esto todos los días”",
    description: "Carga de datos, controles y reportes que consumen horas.",
    icon: ClockAlertIcon,
    badge: "Carga mecánica",
    color: "bg-red-500/15 text-red-600 border-red-500/30",
    glowColor: "group-hover:shadow-red-500/20",
  },
  {
    title: "Información dispersa",
    quote: "“¿Dónde está ese dato?”",
    description: "Información repartida entre computadoras, mails, chats y papeles.",
    icon: SearchXIcon,
    badge: "Cero trazabilidad",
    color: "bg-red-500/15 text-red-600 border-red-500/30",
    glowColor: "group-hover:shadow-red-500/20",
  },
];

export function SymptomsAnimatedList({ className }: { className?: string }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    if (visibleCount < symptoms.length) {
      // First card after 600ms, then 1800ms between each subsequent card
      const delay = visibleCount === 0 ? 300 : 1000;
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, inView]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-500/10 via-card to-amber-500/10 p-5 md:p-6 shadow-2xl backdrop-blur-md",
        className
      )}
    >
      <BorderBeam size={100} duration={8} className="from-red-500 via-[#f08a4b] to-amber-500" />

      {/* Header Alert */}
      <div className="mb-5 flex items-center justify-between border-b border-red-500/20 pb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-red-600" />
          </span>
          <span className="text-xs font-black uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-1.5">
            <div className="size-3.5" />
            Problemas reales sin un sistema
          </span>
        </div>
      </div>

      {/* Dynamic Staggered Symptoms */}
      <div className="flex flex-col gap-3">
        {symptoms.map((item, idx) => {
          const isVisible = idx < visibleCount;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              animate={
                isVisible
                  ? {
                    opacity: 1,
                    x: [0, -6, 6, -3, 3, 0],
                    scale: 1,
                  }
                  : { opacity: 0, x: -30, scale: 0.9 }
              }
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02, x: 4 }}
              className={cn(
                "group relative flex items-start gap-3.5 rounded-2xl border border-border/80 bg-card/95 p-4 shadow-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-md",
                item.glowColor,
                !isVisible && "hidden"
              )}
            >
              <div
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center rounded-2xl border shadow-inner transition-transform group-hover:scale-110",
                  item.color
                )}
              >
                <item.icon className="size-5.5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="text-xs font-bold text-foreground">
                    {item.title}
                  </span>
                </div>

                <p className="text-xs font-bold text-[#f08a4b] mt-1 italic tracking-tight">
                  {item.quote}
                </p>

                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
