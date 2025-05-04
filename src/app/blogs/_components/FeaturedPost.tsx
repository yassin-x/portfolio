import Link from "@/components/link";
import { Pages } from "@/constants/enums";
import { Blogs } from "@prisma/client";
import Image from "next/image";
import React from "react";

export default function FeaturedPost({ blog }: { blog: Blogs }) {
  return (
    <section className="container section-gap">
      <div className="text-start mb-4">
        <h2 className="text-2xl font-bold text-transparent bg-gradient-to-b from-primary to-primary/80 bg-clip-text select-none">
          Featured Post
        </h2>
      </div>
      <Link href={`/${Pages.Blogs}/${blog.link}`}>
        <div className="w-full p-4 rounded-lg bg-card">
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <Image
                src={blog.image}
                alt={blog.title}
                width={980}
                height={1080}
                className="w-[600px] h-[200px] object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center md:items-start gap-2 mt-4">
              <h2 className="text-xl font-bold text-primary">{blog.title}</h2>
              <p className="text-muted-foreground">{blog.description}</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
