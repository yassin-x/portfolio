"use client";
import Link from "@/components/link";
import MainHeading from "@/components/MainHeading";
import { formatDate } from "@/lib/formatDate";
import { Projects } from "@prisma/client";
import { Image } from "antd";
import { ExternalLinkIcon } from "lucide-react";
import React from "react";
import { BsGithub } from "react-icons/bs";

export default function AllProjects({ data }: { data: Projects[] }) {
  return (
    <section className="container section-gap">
      <div className="text-center">
        <MainHeading title={"Projects"} />
      </div>
      <div className="element-center md:block flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          {data.map((project) => (
            <div
              key={project.id}
              className="w-full p-4 rounded-lg border-2 border-accent flex flex-col gap-2 justify-evenly"
            >
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  preview={{
                    mask: false,
                    toolbarRender: () => null,
                  }}
                  className="w-full h-[300px] object-cover rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="flex flex-col items-center gap-2 mt-4">
                <h2 className="text-xl font-bold text-primary">
                  {project.title}
                </h2>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex items-center gap-4 justify-between pt-4">
                <div className="flex items-center gap-2">
                  {project.website && (
                    <Link href={project.website} target="_blank">
                      <ExternalLinkIcon className="w-6 h-6" />
                    </Link>
                  )}
                  {project.github && (
                    <Link href={project.github} target="_blank">
                      <BsGithub className="w-6 h-6" />
                    </Link>
                  )}
                </div>
                <div>
                  <span className="text-sm text-primary/80 bg-accent px-2 py-1 rounded">
                    {formatDate(project.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
