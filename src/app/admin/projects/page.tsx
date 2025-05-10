import React from "react";
import NewProjectButton from "./_components/NewProjectButton";
import AllProjects from "./_components/AllProjects";

export default function ProjectsPage() {
  return (
    <main>
      <NewProjectButton />
      <AllProjects />
    </main>
  );
}
