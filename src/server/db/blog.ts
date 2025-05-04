import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getAllBlogs = cache(
  async () => {
    const data = await db.blogs.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return data;
  },
  ["blogs"],
  { revalidate: 3600 }
);

export const getBlog = cache(
  async (link: string) => {
    const data = await db.blogs.findUnique({
      where: {
        link: link,
      },
    });
    return data;
  },
  [`blog-${crypto.randomUUID()}`],
  { revalidate: 3600 }
);
