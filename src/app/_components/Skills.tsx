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
  SiReactquery,
  SiAuth0,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    [DiHtml5, DiCss3, DiJavascript1, SiTypescript, SiTailwindcss, SiBootstrap],
    [FaNodeJs, FaReact, SiNextdotjs, SiPrisma, SiPostgresql],
    [SiMongodb, SiAppwrite, SiRedis, SiRedux],
    [SiAntdesign, FaGithub, FaGit],
    [SiReactquery, SiExpress],
    [SiAuth0],
  ];
  return (
    <section className="section-gap">
      <div className="text-center">
        <MainHeading title={"Skills"} subTitle={"What i do"} />
      </div>
      <div className="container flex flex-col items-center gap-6 py-4 md:py-8  select-none">
        {skills.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
            }}
          >
            {row.map((Icon, index) => (
              <div key={index} className="flex justify-center items-center">
                <Icon className="w-8 h-8 md:w-16 md:h-16 text-muted-foreground hover:text-primary transition-transform transform hover:scale-110" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
