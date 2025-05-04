"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Pages } from "@/constants/enums";
import { Blogs } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function BlogView({ blog }: { blog: Blogs }) {
  const router = useRouter();

  useEffect(() => {
    if (!blog) {
      router.push(`/${Pages.Blogs}`);
    }
  }, [blog, router]);

  if (!blog) return null;
  return (
    <section className="container ">
      <div className="w-full p-4 rounded-lg">
        <Image
          src={blog.image}
          alt={blog.title}
          width={980}
          height={1080}
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>
      <div>
        <MarkdownRenderer markdown={blog.marker} />
      </div>
    </section>
  );
}
