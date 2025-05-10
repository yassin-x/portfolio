import React from "react";
import { getAllProjects } from "@/server/db/project";
import AllProjects from "./_components/AllProjects";

export default async function Projects() {
  const projects = await getAllProjects();
  return (
    <main>
      <AllProjects data={projects} />
    </main>
  );
}
