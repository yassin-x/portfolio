import { getBlog } from "@/server/db/blog";
import React from "react";
import BlogView from "./_component/BlogView";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}): Promise<Metadata> {
  const data = await getBlog(params.blog);

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
  params: { blog: string };
}) {
  const data = await getBlog(params.blog);

  return (
    <main>
      <BlogView blog={data!} />
    </main>
  );
}
