"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircle2Icon,
  LayersIcon,
  WorkflowIcon,
  BarChart3Icon,
  CalendarCheck2Icon,
  SparklesIcon,
  ExternalLinkIcon,
  ShieldCheckIcon,
  ZapIcon,
  EyeIcon,
  BoxesIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { BorderBeam } from "@/components/velora/border-beam";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { cn } from "@/lib/utils";

interface DemoItem {
  id: string;
  category: string;
  icon: any;
  tagline: string;
  title: string;
  badge: string;
  badgeColor: string;
  problem: string;
  solution: string;
  features: string[];
  mockupUrl: string;
  mockupContent: React.ReactNode;
}

const demos: DemoItem[] = [
  {
    id: "erp-stock",
    category: "Gestión & Inventario",
    icon: BoxesIcon,
    badge: "Demo Funcional",
    badgeColor: "bg-[#577590]/15 text-[#577590] border-[#577590]/30",
    title: "Sistema de Control de Stock, Compras y Facturación",
    tagline: "Inventario en tiempo real y facturación automatizada sin desfasajes",
    problem:
      "Empresas con múltiples depósitos que sufren faltantes imprevistos y facturan manualmente con planillas dispersas.",
    solution:
      "Centraliza productos, compras y movimientos de inventario en una única plataforma con cálculo automático de márgenes y facturación ágil.",
    features: [
      "Alertas automáticas de stock crítico y reposición",
      "Emisión y seguimiento de facturas y presupuestos",
      "Multi-sucursal y control de usuarios con roles",
      "Historial completo de auditoría y trazabilidad",
    ],
    mockupUrl: "app.spintsoft.com/inventario",
    mockupContent: (
      <div className="space-y-3 p-4 text-xs">
        <div className="flex items-center justify-between border-b border-border/50 pb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Inventario General</span>
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
              Sincronizado
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground">1,420 items registrados</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
            <p className="text-[10px] text-muted-foreground">Valor Total Stock</p>
            <p className="text-sm font-bold text-foreground">$ 14.850.000</p>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
            <p className="text-[10px] text-muted-foreground">Alertas de Stock</p>
            <p className="text-sm font-bold text-[#f08a4b]">3 por reponer</p>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
            <p className="text-[10px] text-muted-foreground">Ventas de Hoy</p>
            <p className="text-sm font-bold text-[#577590]">48 órdenes</p>
          </div>
        </div>
        <div className="rounded-lg border border-border/60 overflow-hidden">
          <div className="grid grid-cols-4 bg-muted/70 px-3 py-1.5 font-medium text-[10px] text-muted-foreground">
            <span>CÓDIGO / ARTÍCULO</span>
            <span>STOCK DISPONIBLE</span>
            <span>PRECIO UNITARIO</span>
            <span>ESTADO</span>
          </div>
          <div className="divide-y divide-border/40">
            <div className="grid grid-cols-4 items-center px-3 py-2 text-[11px]">
              <span className="font-medium text-foreground">ART-901 - Válvula Hidráulica</span>
              <span className="text-foreground">84 unidades</span>
              <span className="text-foreground">$ 12.400</span>
              <span className="inline-flex w-fit rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-medium text-emerald-600">
                Óptimo
              </span>
            </div>
            <div className="grid grid-cols-4 items-center px-3 py-2 text-[11px]">
              <span className="font-medium text-foreground">ART-442 - Rodamiento 2RS</span>
              <span className="text-foreground">6 unidades</span>
              <span className="text-foreground">$ 4.850</span>
              <span className="inline-flex w-fit rounded-full bg-[#f2a541]/20 px-2 py-0.5 text-[9px] font-medium text-[#f2a541]">
                Stock bajo
              </span>
            </div>
            <div className="grid grid-cols-4 items-center px-3 py-2 text-[11px]">
              <span className="font-medium text-foreground">ART-108 - Sensor Térmico</span>
              <span className="text-foreground">120 unidades</span>
              <span className="text-foreground">$ 18.200</span>
              <span className="inline-flex w-fit rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-medium text-emerald-600">
                Óptimo
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "workflows-automation",
    category: "Automatización & Tareas",
    icon: WorkflowIcon,
    badge: "Demo Interactiva",
    badgeColor: "bg-[#f2a541]/15 text-[#f2a541] border-[#f2a541]/30",
    title: "Automatizador de Procesos y Flujos de Trabajo",
    tagline: "Elimina pasos manuales entre recepción de pedidos, almacén y administración",
    problem:
      "Pérdida de horas laborales reenviando información por email, cargando datos a mano en múltiples sistemas y generando reportes mecánicos.",
    solution:
      "Orquesta tus procesos empresariales: cuando entra un pedido o solicitud, el sistema valida, genera comprobantes y notifica a las áreas correspondientes de forma automática.",
    features: [
      "Disparadores y acciones automatizadas personalizadas",
      "Validación de datos sin intervención humana",
      "Generación y envío programado de reportes en PDF/Excel",
      "Reducción drástica del margen de error operativo",
    ],
    mockupUrl: "app.spintsoft.com/workflows",
    mockupContent: (
      <div className="space-y-3 p-4 text-xs">
        <div className="flex items-center justify-between border-b border-border/50 pb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Flujos Automatizados Activos</span>
            <span className="rounded bg-[#f08a4b]/10 px-2 py-0.5 text-[10px] font-medium text-[#f08a4b]">
              4 en ejecución
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground">99.9% efectividad</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-[#577590]/30 bg-[#577590]/5 p-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-7 items-center justify-center rounded-md bg-[#577590] text-white">
                <ZapIcon className="size-3.5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Recepción de Pedido Web → Facturación</p>
                <p className="text-[10px] text-muted-foreground">Genera factura, actualiza inventario y envía correo al cliente</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
              Ejecutado hace 2m
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 p-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-7 items-center justify-center rounded-md bg-[#f2a541] text-white">
                <WorkflowIcon className="size-3.5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Alerta de Cuentas por Cobrar</p>
                <p className="text-[10px] text-muted-foreground">Detecta vencimientos a 48hs y envía recordatorio automático</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
              Programado diario
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 p-3">
            <div className="flex items-center gap-2.5">
              <div className="flex size-7 items-center justify-center rounded-md bg-[#d78a76] text-white">
                <BarChart3Icon className="size-3.5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Cierre Diario Consolidado</p>
                <p className="text-[10px] text-muted-foreground">Compila ventas, cobranzas y pendientes en informe gerencial</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
              Activo 20:00 hs
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analytics-portal",
    category: "Dashboard & Analítica",
    icon: BarChart3Icon,
    badge: "Demo Ejecutiva",
    badgeColor: "bg-[#f08a4b]/15 text-[#f08a4b] border-[#f08a4b]/30",
    title: "Panel Gerencial de Indicadores & Portal de Clientes",
    tagline: "Toma de decisiones fundamentada en datos claros y acceso directo para clientes",
    problem:
      "Tener que esperar a fin de mes para saber si el negocio fue rentable o atender decenas de llamadas de clientes consultando el estado de sus pedidos.",
    solution:
      "Un panel en tiempo real para directivos con gráficos claros de rentabilidad y un portal web donde los clientes pueden autogestionarse.",
    features: [
      "Visualización en vivo de ventas, costos y márgenes",
      "Portal privado para que los clientes descarguen comprobantes",
      "Filtros por período, vendedor, producto o sucursal",
      "Exportación directa a formatos ejecutivos",
    ],
    mockupUrl: "app.spintsoft.com/dashboard-gerencial",
    mockupContent: (
      <div className="space-y-3 p-4 text-xs">
        <div className="flex items-center justify-between border-b border-border/50 pb-2">
          <span className="font-semibold text-foreground">Métricas Operativas del Mes</span>
          <span className="rounded bg-[#577590]/10 px-2 py-0.5 text-[10px] font-medium text-[#577590]">
            Actualizado en vivo
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
            <p className="text-[10px] text-muted-foreground">Ingresos Totales</p>
            <p className="text-sm font-bold text-[#577590]">$ 28.420.000</p>
            <span className="text-[10px] text-emerald-600 font-medium">↑ +14.2% vs anterior</span>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
            <p className="text-[10px] text-muted-foreground">Efectividad de Entregas</p>
            <p className="text-sm font-bold text-[#f2a541]">98.6%</p>
            <span className="text-[10px] text-emerald-600 font-medium">↑ a tiempo</span>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5">
            <p className="text-[10px] text-muted-foreground">Tiempo Promedio Atención</p>
            <p className="text-sm font-bold text-[#f08a4b]">4.2 min</p>
            <span className="text-[10px] text-emerald-600 font-medium">↓ -65% reducción</span>
          </div>
        </div>
        <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-foreground">Evolución de Rendimiento Semanal</span>
            <span className="text-[10px] text-muted-foreground">Últimas 4 semanas</span>
          </div>
          <div className="flex h-16 items-end gap-2">
            {[45, 68, 55, 90, 75, 95, 88].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-sm bg-gradient-to-t from-[#577590] via-[#f2a541] to-[#f08a4b]"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[8px] text-muted-foreground">D{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "appointments-services",
    category: "Servicios & Turnos",
    icon: CalendarCheck2Icon,
    badge: "Demo Interactiva",
    badgeColor: "bg-[#d78a76]/15 text-[#d78a76] border-[#d78a76]/30",
    title: "Plataforma de Turnos, Citas & Seguimiento de Servicios",
    tagline: "Agendamiento 24/7 y control integral de profesionales y prestaciones",
    problem:
      "Superposición de turnos, ausencias imprevistas de clientes y confusión en la disponibilidad de los prestadores de servicios.",
    solution:
      "Permite a tus clientes reservar en segundos según disponibilidad real, con recordatorios automáticos e historial clínico/técnico unificado.",
    features: [
      "Calendario interactivo multi-profesional y multi-sala",
      "Confirmación y recordatorios por email sin costo extra",
      "Historial detallado por cliente o paciente",
      "Cobro de señas o servicios integrados",
    ],
    mockupUrl: "app.spintsoft.com/turnos-servicios",
    mockupContent: (
      <div className="space-y-3 p-4 text-xs">
        <div className="flex items-center justify-between border-b border-border/50 pb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Agenda de Servicios de Hoy</span>
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
              18 turnos confirmados
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground">3 profesionales activos</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/40 p-2.5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#577590] text-white px-2 py-1 font-mono text-[10px] font-bold">
                09:00
              </span>
              <div>
                <p className="font-semibold text-foreground">Consultoría Técnica Especializada</p>
                <p className="text-[10px] text-muted-foreground">Cliente: Industrias Metalúrgicas S.A. (Dr. Gómez)</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
              Confirmado
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/40 p-2.5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#f2a541] text-white px-2 py-1 font-mono text-[10px] font-bold">
                10:30
              </span>
              <div>
                <p className="font-semibold text-foreground">Revisión Preventiva & Diagnóstico</p>
                <p className="text-[10px] text-muted-foreground">Cliente: Logística Del Sur (Ing. Rossi)</p>
              </div>
            </div>
            <span className="rounded-full bg-[#f2a541]/20 px-2 py-0.5 text-[9px] font-semibold text-[#f2a541]">
              En curso
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/40 p-2.5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#d78a76] text-white px-2 py-1 font-mono text-[10px] font-bold">
                12:00
              </span>
              <div>
                <p className="font-semibold text-foreground">Auditoría de Procesos</p>
                <p className="text-[10px] text-muted-foreground">Cliente: Distribuidora Central</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
              Confirmado
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export function DemosCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentDemo = demos[activeIndex];

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? demos.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === demos.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="w-full">
      {/* Category selector tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {demos.map((demo, idx) => {
          const Icon = demo.icon;
          const isActive = idx === activeIndex;
          return (
            <button
              key={demo.id}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-[#577590] text-white shadow-md scale-105"
                  : "bg-card border border-border/70 text-muted-foreground hover:text-foreground hover:border-[#577590]/40"
              )}
            >
              <Icon className="size-3.5" />
              <span>{demo.category}</span>
            </button>
          );
        })}
      </div>

      {/* Main Carousel Card */}
      <div className="relative rounded-3xl border border-border/80 bg-card/80 p-6 md:p-8 shadow-xl backdrop-blur-sm overflow-hidden">
        <BorderBeam size={120} duration={9} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentDemo.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center"
          >
            {/* Left Column: Information & Value Description */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
                    currentDemo.badgeColor
                  )}
                >
                  <SparklesIcon className="size-3" />
                  {currentDemo.badge}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  Demo {activeIndex + 1} de {demos.length}
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  {currentDemo.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#f08a4b]">
                  {currentDemo.tagline}
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-border/60 bg-muted/30 p-4">
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    El problema que resuelve:
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {currentDemo.problem}
                  </p>
                </div>
                <div className="border-t border-border/40 pt-2.5">
                  <p className="text-xs font-semibold text-foreground">
                    Cómo lo soluciona este sistema:
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {currentDemo.solution}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                  Funcionalidades principales demostradas:
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {currentDemo.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-foreground">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#577590]/15 text-[#577590] mt-0.5">
                        <CheckCircle2Icon className="size-3" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button className="rounded-full bg-[#577590] hover:bg-[#435b71] text-white shadow-sm" asChild>
                  <a href="#contacto">
                    <EyeIcon className="size-4 mr-1.5" />
                    Solicitar demo guiada de este sistema
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#577590]/10 via-[#f2a541]/10 to-[#f08a4b]/10 blur-2xl"
              />
              <BrowserMockup url={currentDemo.mockupUrl} className="relative shadow-xl">
                {currentDemo.mockupContent}
              </BrowserMockup>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {demos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Ir a demo ${idx + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  idx === activeIndex
                    ? "w-8 bg-[#577590]"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-full border-border/80"
              onClick={prev}
              aria-label="Demo anterior"
            >
              <ChevronLeftIcon className="size-4" />
            </Button>
            <Button
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
    </div>
  );
}
