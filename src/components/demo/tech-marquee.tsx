"use client";

import { Marquee } from "@/components/velora/marquee";
import { IconType } from "react-icons";
import {
  SiPostgresql,
  SiMysql,
  SiNestjs,
  SiSpringboot,
  SiReact,
  SiAngular,
  SiDocker,
  SiMongodb,
  SiTypescript,
  SiGit,
} from "react-icons/si";

interface TechItem {
  name: string;
  category: string;
  icon: IconType;
}

const technologies: TechItem[] = [
  {
    name: "PostgreSQL",
    category: "Base de Datos Relacional",
    icon: SiPostgresql,
  },
  {
    name: "MySQL",
    category: "Base de Datos SQL",
    icon: SiMysql,
  },
  {
    name: "NestJS",
    category: "Arquitectura Backend",
    icon: SiNestjs,
  },
  {
    name: "Spring Boot",
    category: "Enterprise Java",
    icon: SiSpringboot,
  },
  {
    name: "React",
    category: "Frontend UI Moderno",
    icon: SiReact,
  },
  {
    name: "Angular",
    category: "Frontend Empresarial",
    icon: SiAngular,
  },
  {
    name: "Docker",
    category: "Contenedores & Despliegue",
    icon: SiDocker,
  },
  {
    name: "Git",
    category: "Control de Versiones",
    icon: SiGit,
  },
  {
    name: "MongoDB",
    category: "NoSQL & Documentos",
    icon: SiMongodb,
  },
  {
    name: "TypeScript",
    category: "Tipado Estricto & Robustez",
    icon: SiTypescript,
  },
];

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:28s] py-2">
        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="mx-3 flex items-center gap-3.5 rounded-2xl border border-border/70 bg-card/80 px-5 py-3 shadow-xs transition-all duration-200 hover:border-[#577590] hover:scale-105"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#577590]/10 text-[#577590]">
                <Icon className="size-6" />
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold text-foreground tracking-tight">
                  {tech.name}
                </p>

                <p className="text-[11px] text-muted-foreground">
                  {tech.category}
                </p>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}