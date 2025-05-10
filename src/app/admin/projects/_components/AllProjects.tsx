import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import { getAllProjects } from "@/server/db/project";
import { EditIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import DeleteProject from "./DeleteProject";

export default async function AllProjects() {
  const projects = await getAllProjects();
  return (
    <section className="container-sm section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-accent border-2 flex flex-col gap-2 max-w-md flex-grow"
          >
            <div className="flex-grow">
              <Image
                src={project.image}
                alt={project.title}
                width={980}
                height={1080}
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="px-4 md:px-6 py-6 flex flex-col justify-between flex-grow gap-4">
              <h2 className="text-2xl font-bold text-primary">
                {project.title}
              </h2>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className="pt-4 mt-auto flex items-center gap-2">
                <Link
                  href={`/${Routes.Admin}/${Pages.Projects}/${Pages.Edit}/${project.id}`}
                  className={`${buttonVariants({ variant: "outline" })}`}
                >
                  <EditIcon />
                </Link>
                <DeleteProject projectId={project.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
