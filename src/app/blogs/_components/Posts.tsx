import Link from "@/components/link";
import { Pages } from "@/constants/enums";
import { Blogs } from "@/generated/prisma";
import Image from "next/image";
import React from "react";

export default function Posts({ blogs }: { blogs: Blogs[] }) {
  const otherBlogs = blogs.slice(1);
  if (otherBlogs.length < 1) {
    return (
      <section>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">No posts others</h2>
        </div>
      </section>
    );
  }
  return (
    <section className="container ">
      <div className="text-start mb-4">
        <h2 className="text-2xl font-bold text-transparent bg-gradient-to-b from-primary to-primary/80 bg-clip-text select-none">
          Posts
        </h2>
      </div>
      <div className="element-center md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
          {otherBlogs.map((blog) => (
            <Link key={blog.id} href={`/${Pages.Blogs}/${blog.link}`}>
              <div className="w-full p-4 rounded-lg bg-card">
                <div>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={980}
                    height={1080}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center gap-2 mt-4">
                  <h2 className="text-xl font-bold text-primary">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground">{blog.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
