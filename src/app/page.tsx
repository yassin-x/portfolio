import Hero from "./_components/Hero";
import LatestBlogs from "./_components/LatestBlogs";
import LatestProjects from "./_components/LatestProjects";
import Skills from "./_components/Skills";
import { getAllProjects } from "@/server/db/project";

export default async function Home() {
  const projects = await getAllProjects();
  return (
    <main>
      <Hero />
      <Skills />
      <LatestBlogs />
      <LatestProjects projects={projects} />
    </main>
  );
}
