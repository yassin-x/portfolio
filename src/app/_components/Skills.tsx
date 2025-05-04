"use client";
import MainHeading from "@/components/MainHeading";
import React from "react";
import { FaGit, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiAppwrite,
  SiBootstrap,
  SiPrisma,
  SiRedux,
  SiAntdesign,
  SiAuth0,
  SiExpress,
} from "react-icons/si";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const skills = [
  { icon: DiHtml5, name: "HTML5" },
  { icon: DiCss3, name: "CSS3" },
  { icon: DiJavascript1, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiAppwrite, name: "Appwrite" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiAntdesign, name: "Ant Design" },
  { icon: FaGithub, name: "GitHub" },
  { icon: FaGit, name: "Git" },
  { icon: SiExpress, name: "Express" },
  { icon: SiAuth0, name: "Next Auth" },
];

export default function Skills() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  );

  return (
    <section className="section-gap">
      <div className="text-center">
        <MainHeading title={"Skills"} subTitle={"What I Do"} />
      </div>
      <div className="border-y-2 border-accent">
        <div className="container max-w-4xl mx-auto select-none">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <CarouselItem
                    key={index}
                    className="basis-1/3 sm:basis-1/5 lg:basis-1/6"
                  >
                    <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
                      <Icon className="w-12 h-12 text-muted-foreground hover:text-primary transition-transform transform hover:scale-110 mx-auto" />
                      <span className="text-sm md:text-base text-muted-foreground">
                        {skill.name}
                      </span>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
