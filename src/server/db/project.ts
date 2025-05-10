import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getAllProjects = cache(
  async () => {
    const data = await db.projects.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return data;
  },
  ["projects"],
  { revalidate: 3600 }
);

export const getProject = cache(
  async (id: string) => {
    const data = await db.projects.findUnique({
      where: {
        id: id,
      },
    });
    return data;
  },
  [`project-${crypto.randomUUID()}`],
  { revalidate: 3600 }
);
