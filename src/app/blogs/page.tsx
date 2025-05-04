import React from "react";
import FeaturedPost from "./_components/FeaturedPost";
import { getAllBlogs } from "@/server/db/blog";
import Posts from "./_components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yassin Ibrahim | Blogs",
  description:
    "Explore a variety of articles by Yassin Ibrahim covering topics in programming, technology, and creativity. Stay updated with fresh insights and trends in the tech world through my personal blog.",
  robots: "index, follow",
  alternates: {
    canonical: "https://yassin.icu/blogs",
  },
};
export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  const firstBlog = blogs[0];
  return (
    <main>
      <FeaturedPost blog={firstBlog} />
      <Posts blogs={blogs} />
    </main>
  );
}
