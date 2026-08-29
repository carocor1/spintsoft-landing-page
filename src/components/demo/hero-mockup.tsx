"use client";

import { motion } from "motion/react";
import {
  BarChart3Icon,
  BoxesIcon,
  CheckCircle2Icon,
  LayoutDashboardIcon,
  ReceiptIcon,
  SparklesIcon,
  TrendingUpIcon,
  UsersIcon,
  WorkflowIcon,
} from "lucide-react";

import { BorderBeam } from "@/components/velora/border-beam";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { NumberTicker } from "@/components/velora/number-ticker";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboardIcon, label: "Panel Central", active: true },
  { icon: BoxesIcon, label: "Stock & Compras" },
  { icon: ReceiptIcon, label: "Facturación" },
  { icon: WorkflowIcon, label: "Automatizaciones" },
  { icon: UsersIcon, label: "Clientes" },
];

const stats = [
  { label: "Operaciones Centralizadas", value: 1420, prefix: "", change: "100% en tiempo real" },
  { label: "Tareas Manuales Reemplazadas", value: 86, suffix: "/mes", change: "automatizado" },
  { label: "Tiempo de Respuesta", value: 3.5, prefix: "", suffix: "x", decimals: 1, change: "más ágil" },
];

const bars = [32, 54, 45, 68, 58, 82, 70, 94, 62, 85, 90, 98];

export function HeroMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-5xl", className)}>
      {/* Warm Glow with Spintsoft Palette */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-[#577590]/25 via-[#f2a541]/25 to-[#f08a4b]/20 opacity-70 blur-3xl"
      />

      <BrowserMockup url="app.spintsoft.com/dashboard" className="relative shadow-2xl border-border/80 bg-card">
        <BorderBeam size={110} duration={9} />

        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-48 flex-col gap-1.5 border-r border-border/60 p-3.5 md:flex bg-muted/20">
            <div className="px-3 py-2 text-xs font-bold tracking-tight text-[#577590] flex items-center gap-1.5">
              <SparklesIcon className="size-3.5 text-[#f08a4b]" />
              Spintsoft Core
            </div>
            {navItems.map((item) => (
              <span
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs transition-colors",
                  item.active
                    ? "bg-[#577590] font-semibold text-white shadow-xs"
                    : "text-muted-foreground hover:bg-muted/60"
                )}
              >
                <item.icon className="size-3.5" />
                {item.label}
              </span>
            ))}
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="text-sm font-bold text-foreground">
                  Visión General del Sistema
                </span>
                <p className="text-[11px] text-muted-foreground">Flujos integrados y procesos activos</p>
              </div>
              <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2Icon className="size-3" />
                En línea
              </span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/70 bg-card/90 p-3 lg:p-4 shadow-xs"
                >
                  <p className="text-[11px] font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-base font-bold text-foreground lg:text-xl">
                    <NumberTicker
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix ?? ""}
                      decimalPlaces={stat.decimals ?? 0}
                    />
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                    <TrendingUpIcon className="size-3" />
                    {stat.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Performance activity chart */}
            <div className="mt-3.5 rounded-xl border border-border/70 bg-card/90 p-4 shadow-xs">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-foreground">
                    Rendimiento Operativo & Automatización
                  </span>
                  <p className="text-[10px] text-muted-foreground">Registros procesados automáticamente</p>
                </div>
                <span className="rounded bg-[#f2a541]/10 px-2 py-0.5 text-[10px] font-semibold text-[#f2a541]">
                  Últimos 12 meses
                </span>
              </div>
              <div className="flex h-28 items-end gap-2 lg:h-36">
                {bars.map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.04,
                      duration: 0.5,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-[#577590] via-[#f2a541] to-[#f08a4b]"
                    style={{ height: `${height}%`, opacity: 0.65 + height / 250 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
