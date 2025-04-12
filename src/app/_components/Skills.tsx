"use client";
import MainHeading from "@/components/MainHeading";
import React from "react";
import { Carousel } from "antd";
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
  return (
    <section className="section-gap space-y-4">
      <div className="text-center">
        <MainHeading title={"Skills"} subTitle={"What i do"} />
      </div>
      <div className="border-y-2 border-accent">
        <div className="container max-w-4xl mx-auto select-none">
          <Carousel
            autoplay
            infinite
            autoplaySpeed={1000}
            dots={false}
            className="overflow-hidden"
            slidesToShow={5}
            responsive={[
              {
                breakpoint: 771,
                settings: {
                  slidesToShow: 5,
                },
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 3,
                },
              },
            ]}
            slidesToScroll={1}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 p-4 text-center"
                >
                  <Icon className="w-12 h-12 text-muted-foreground hover:text-primary transition-transform transform hover:scale-110 mx-auto" />
                  <span className="text-sm md:text-base text-muted-foreground">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
