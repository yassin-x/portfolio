import React from "react";
import FeaturedPost from "./_components/FeaturedPost";
import { getAllBlogs } from "@/server/db/blog";
import Posts from "./_components/Posts";

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
