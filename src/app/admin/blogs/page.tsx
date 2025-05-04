import React from "react";
import NewBlogButton from "./_components/NewBlogButton";
import AllBlogs from "./_components/AllBlogs";

export default function BlogsAdminPage() {
  return (
    <main>
      <NewBlogButton />
      <AllBlogs />
    </main>
  );
}
