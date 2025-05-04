import Link from "@/components/link";
import MainHeading from "@/components/MainHeading";
import { Pages } from "@/constants/enums";
import { getAllBlogs } from "@/server/db/blog";
import Image from "next/image";
import React from "react";

export default async function LatestBlogs() {
  const blogs = await getAllBlogs();
  return (
    <section className="container section-gap">
      <div className="text-center">
        <MainHeading title={"What's New"} subTitle={"Latest Posts"} />
      </div>
      <div className="element-center md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          {blogs.slice(0, 3).map((blog) => (
            <Link key={blog.id} href={`/${Pages.Blogs}/${blog.link}`}>
              <div className="w-full p-4 rounded-lg border-2 border-accent group">
                <div>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={980}
                    height={1080}
                    loading="lazy"
                    className="w-full h-[200px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
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
