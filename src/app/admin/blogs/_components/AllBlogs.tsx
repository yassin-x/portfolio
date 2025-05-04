import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import { getAllBlogs } from "@/server/db/blog";
import { EditIcon, LibraryIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import DeleteBlog from "./DeleteBlog";

export default async function AllBlogs() {
  const blogs = await getAllBlogs();
  return (
    <section className="container section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border-accent border-2 flex flex-col gap-2 max-w-md flex-grow"
          >
            <div className="flex-grow">
              <Image
                src={blog.image}
                alt={blog.title}
                width={980}
                height={1080}
                className="w-full h-[200px] object-cover"
              />
            </div>
            <div className="px-4 md:px-6 py-6 flex flex-col justify-between flex-grow">
              <h2 className="text-2xl font-bold text-primary">{blog.title}</h2>
              <p className="text-muted-foreground text-sm">
                {blog.description}
              </p>
              <div className="pt-4 mt-auto flex items-center gap-2">
                <Link
                  href={`/${Pages.Blogs}/${blog.link}`}
                  className={`${buttonVariants({ variant: "outline" })}`}
                  target="_blank"
                >
                  <LibraryIcon />
                </Link>
                <Link
                  href={`/${Routes.Admin}/${Pages.Blogs}/${Pages.Edit}/${blog.link}`}
                  className={`${buttonVariants({ variant: "outline" })}`}
                >
                  <EditIcon />
                </Link>
                <DeleteBlog blogId={blog.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
