import { getBlog } from "@/server/db/blog";
import React from "react";
import BlogView from "./_component/BlogView";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string }>;
}): Promise<Metadata> {
  const { blog } = await params;
  const data = await getBlog(blog);

  return {
    title: data?.title,
    description: data?.description,
    openGraph: {
      title: data?.title,
      description: data?.description,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await params;
  const data = await getBlog(blog);

  return (
    <main>
      <BlogView blog={data!} />
    </main>
  );
}
