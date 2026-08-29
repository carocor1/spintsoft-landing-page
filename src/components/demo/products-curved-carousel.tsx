"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GlobeIcon,
  LayersIcon,
  ZapIcon,
  Code2Icon,
  CheckCircle2Icon,
  ArrowRightIcon,
  SparklesIcon,
  PauseIcon,
  PlayIcon,
  ChevronRightIcon,
} from "lucide-react";

import { BorderBeam } from "@/components/velora/border-beam";
import { cn } from "@/lib/utils";

export interface ProductItem {
  id: string;
  category: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: typeof GlobeIcon;
  color: {
    primary: string;
    secondary: string;
    border: string;
    bgBadge: string;
    textBadge: string;
    glow: string;
  };
  features: string[];
}

const products: ProductItem[] = [
  {
    id: "presencia-digital",
    category: "PRESENCIA DIGITAL",
    subtitle: "Tu negocio, siempre visible.",
    description:
      "Creamos sitios web y landing pages rápidas, modernas y adaptadas a tu marca.",
    tags: ["Landing", "Web", "WhatsApp"],
    icon: GlobeIcon,
    color: {
      primary: "#577590",
      secondary: "#577590",
      border: "border-[#577590]/40",
      bgBadge: "bg-[#577590]/15",
      textBadge: "text-[#577590] dark:text-[#8fb3d1]",
      glow: "rgba(87, 117, 144, 0.25)",
    },
    features: [
      "Diseño responsive",
      "Integración con WhatsApp",
      "Optimización para Google",
    ],
  },
  {
    id: "sistemas-gestion",
    category: "SISTEMAS DE GESTIÓN",
    subtitle: "Centralizamos tus planillas dispersas.",
    description:
      "Transformamos información y procesos que hoy gestionás en Excel o herramientas desconectadas en sistemas centralizados, claros y fáciles de consultar.",
    tags: ["Centralización", "Reportes", "Analíticas"],
    icon: LayersIcon,
    color: {
      primary: "#f3ca40",
      secondary: "#f3ca40",
      border: "border-[#f3ca40]/45",
      bgBadge: "bg-[#f3ca40]/15",
      textBadge: "text-[#9a7a00] dark:text-[#f3ca40]",
      glow: "rgba(243, 202, 64, 0.25)",
    },
    features: [
      "Centralización de la información",
      "Paneles y reportes personalizados",
      "Analíticas para tomar decisiones",
    ],
  },
  {
    id: "automatizacion",
    category: "AUTOMATIZACIÓN",
    subtitle: "Automatizá lo que hoy hacés a mano.",
    description:
      "Conectamos tus herramientas y automatizamos tareas repetitivas para ahorrar tiempo y reducir errores.",
    tags: ["Datos", "Reportes", "Procesos"],
    icon: ZapIcon,
    color: {
      primary: "#f08a4b",
      secondary: "#f08a4b",
      border: "border-[#f08a4b]/40",
      bgBadge: "bg-[#f08a4b]/15",
      textBadge: "text-[#f08a4b] dark:text-[#ffb07c]",
      glow: "rgba(240, 138, 75, 0.25)",
    },
    features: [
      "Automatización de tareas",
      "Integración entre sistemas",
      "Reportes y notificaciones",
    ],
  },
  {
    id: "software-medida",
    category: "SOFTWARE A MEDIDA",
    subtitle: "¿Necesitás algo diferente? Lo construimos.",
    description:
      "Creamos plataformas y herramientas a medida para los desafíos específicos de tu organización. Arquitecturas escalables que crecen al ritmo de tu negocio.",
    tags: ["Personalizado", "Integraciones"],
    icon: Code2Icon,
    color: {
      primary: "#d78a76",
      secondary: "#d78a76",
      border: "border-[#d78a76]/40",
      bgBadge: "bg-[#d78a76]/15",
      textBadge: "text-[#d78a76] dark:text-[#f0aa98]",
      glow: "rgba(215, 138, 118, 0.25)",
    },
    features: [
      "Desarrollo personalizado",
      "Integración con APIs",
      "Evolución y mantenimiento",
    ],
  },
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds per slide

export function ProductsCurvedCarousel({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [svgPath, setSvgPath] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  // Auto-rotation timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  // Recalculate curved SVG path connecting EXACTLY from center of 1st icon to center of 4th icon
  useEffect(() => {
    const updatePath = () => {
      const listEl = listContainerRef.current;
      const firstNode = nodeRefs.current[0];
      const lastNode = nodeRefs.current[products.length - 1];

      if (!listEl || !firstNode || !lastNode) return;

      const listRect = listEl.getBoundingClientRect();
      const firstRect = firstNode.getBoundingClientRect();
      const lastRect = lastNode.getBoundingClientRect();

      const startX = firstRect.left - listRect.left + firstRect.width / 2;
      const startY = firstRect.top - listRect.top + firstRect.height / 2;
      const endY = lastRect.top - listRect.top + lastRect.height / 2;
      const height = listRect.height;

      setSvgHeight(height);

      const curveOffset = 26; // Smooth S-curve amplitude
      const d = `M ${startX},${startY} C ${startX + curveOffset},${
        startY + (endY - startY) * 0.25
      } ${startX - curveOffset},${startY + (endY - startY) * 0.75} ${startX},${endY}`;

      setSvgPath(d);
    };

    updatePath();
    const observer = new ResizeObserver(updatePath);
    if (listContainerRef.current) observer.observe(listContainerRef.current);
    window.addEventListener("resize", updatePath);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const selectProduct = (index: number) => {
    setActiveIndex(index);
  };

  const activeProduct = products[activeIndex];

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto w-full max-w-5xl", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Interactive Stage: Curved Vertical Rail + Product Showcase Card (Fixed equal height) */}
      <div className="relative grid gap-6 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Curved Vertical S-Beam Path & Interactive Station Nodes (Fixed Height: 520px) */}
        <div className="relative flex flex-col justify-between rounded-3xl border border-border/70 bg-gradient-to-b from-card/80 via-card/50 to-card/90 p-5 sm:p-7 shadow-sm backdrop-blur-md lg:col-span-5 h-[520px]">
          {/* Animated Background Ambience */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-25 transition-all duration-700 blur-2xl"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${activeProduct.color.glow}, transparent 70%)`,
            }}
          />

          {/* Station Step Nodes vertically distributed to occupy full available height */}
          <div
            ref={listContainerRef}
            className="relative z-10 flex flex-1 flex-col justify-between py-1"
          >
            {/* Curved SVG Spine connecting from center of first icon to center of last icon */}
            {svgPath && (
              <svg
                className="pointer-events-none absolute inset-0 w-full overflow-visible"
                style={{ height: svgHeight || "100%" }}
                aria-hidden="true"
              >
                {/* Base dashed line */}
                <path
                  d={svgPath}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="text-border/70"
                />
                {/* Animated flowing energy beam */}
                <motion.path
                  d={svgPath}
                  fill="none"
                  stroke={activeProduct.color.primary}
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0.3 }}
                  animate={{
                    pathLength: [0.15, 0.95, 0.15],
                    pathOffset: [0, 0.85, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            )}

            {products.map((item, index) => {
              const isActive = activeIndex === index;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => selectProduct(index)}
                  className={cn(
                    "group relative flex items-center gap-3.5 rounded-2xl p-2.5 sm:p-3 text-left transition-all duration-300",
                    isActive
                      ? "bg-card shadow-md border border-border"
                      : "hover:bg-muted/50 border border-transparent"
                  )}
                >
                  {/* Active Highlight Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator-bar"
                      className="absolute -left-1.5 h-8 w-1 rounded-r-full"
                      style={{ backgroundColor: item.color.primary }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Node Circle */}
                  <div
                    ref={(el) => {
                      nodeRefs.current[index] = el;
                    }}
                    className={cn(
                      "relative z-10 flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-2xl border font-bold text-sm transition-all duration-300",
                      isActive
                        ? "shadow-lg scale-105"
                        : "bg-card text-muted-foreground border-border/80 group-hover:scale-100 group-hover:border-foreground/30"
                    )}
                    style={{
                      backgroundColor: isActive ? item.color.primary : undefined,
                      color: isActive ? "#ffffff" : undefined,
                      borderColor: isActive ? item.color.primary : undefined,
                      boxShadow: isActive ? `0 0 18px ${item.color.glow}` : undefined,
                    }}
                  >
                    <Icon className="size-5" />

                    {/* Ping animation when active */}
                    {isActive && (
                      <span
                        className="absolute -inset-1 rounded-2xl opacity-40 animate-ping"
                        style={{ backgroundColor: item.color.primary }}
                      />
                    )}
                  </div>

                  {/* Node Text Info */}
                  <div className="min-w-0 flex-1">
                    <h4
                      className={cn(
                        "text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors",
                        isActive ? "font-extrabold" : "text-muted-foreground group-hover:text-foreground"
                      )}
                      style={{
                        color: isActive ? item.color.primary : undefined,
                      }}
                    >
                      {item.category}
                    </h4>
                    <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <ChevronRightIcon
                    className={cn(
                      "size-4 shrink-0 transition-transform duration-300",
                      isActive
                        ? "translate-x-0.5 opacity-100"
                        : "text-muted-foreground opacity-30 group-hover:opacity-70"
                    )}
                    style={{
                      color: isActive ? item.color.primary : undefined,
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Bottom Action / Consultation & Subtle Play/Pause Button */}
          <div className="mt-4 border-t border-border/60 pt-3 flex items-center justify-between">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
            >
              <span>Consultanos</span>
              <ArrowRightIcon className="size-3 text-primary" />
            </a>

            {/* Discreet Autoplay Pause / Resume button */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title={isPaused ? "Reanudar rotación automática" : "Pausar rotación automática"}
            >
              {isPaused ? (
                <>
                  <PlayIcon className="size-3 text-emerald-500" />
                  <span>Reanudar</span>
                </>
              ) : (
                <>
                  <PauseIcon className="size-3 text-amber-500" />
                  <span>Pausar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Active Product Showcase Card (Fixed Height: 520px - Never changes size) */}
        <div className="relative lg:col-span-7 h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full"
            >
              {/* Outer Card with exact BorderBeam travelling on the perimeter */}
              <div
                ref={cardRef}
                onMouseMove={handleCardMouseMove}
                className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xl"
                style={
                  {
                    "--spot-radius": "380px",
                    "--spot-color": activeProduct.color.glow,
                  } as React.CSSProperties
                }
              >
                {/* Border Beam Animation directly on the outer border */}
                <BorderBeam
                  size={140}
                  duration={6}
                  colorFrom={activeProduct.color.primary}
                  colorTo={activeProduct.color.secondary}
                />

                {/* Spotlight Cursor Glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(var(--spot-radius) circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--spot-color), transparent 65%)",
                  }}
                />

                {/* Ambient Top Glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: activeProduct.color.primary }}
                />

                {/* Top Details */}
                <div className="relative z-10 flex flex-col">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 px-3.5 py-1 text-xs font-bold tracking-wide">
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: activeProduct.color.primary }}
                      />
                      <span style={{ color: activeProduct.color.primary }}>
                        {activeProduct.category}
                      </span>
                    </div>
                  </div>

                  {/* Main Headline */}
                  <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight">
                    {activeProduct.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {activeProduct.description}
                  </p>

                  {/* Dynamic Pills / Tags of the product */}
                  <div className="mt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 block mb-2">
                      Incluye:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.tags.map((tag) => (
                        <div
                          key={tag}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-xs transition-transform hover:scale-105",
                            activeProduct.color.bgBadge,
                            activeProduct.color.textBadge,
                            activeProduct.color.border
                          )}
                        >
                          <SparklesIcon className="size-3" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits / Highlights List */}
                  <div className="mt-4 space-y-2 rounded-2xl border border-border/60 bg-muted/30 p-3.5 sm:p-4">
                    {activeProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2Icon
                          className="size-4 shrink-0 mt-0.5"
                          style={{ color: activeProduct.color.primary }}
                        />
                        <span className="text-foreground/90 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button pinned at the base */}
                <div className="relative z-10 mt-4 pt-2">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-200 active:scale-95 hover:opacity-95"
                    style={{ backgroundColor: activeProduct.color.primary }}
                  >
                    <span>Quiero implementar {activeProduct.category.toLowerCase()}</span>
                    <ArrowRightIcon className="size-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
