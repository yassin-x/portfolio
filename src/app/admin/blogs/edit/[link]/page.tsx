import React from "react";
import Form from "./_components/Form";
import { getBlog } from "@/server/db/blog";

export default async function NewBlog({
  params,
}: {
  params: Promise<{ link: string }>;
}) {
  const { link } = await params;
  const data = await getBlog(link);
  return (
    <main>
      <section className="section-gap-xl container">
        <div className="bg-card element-center p-4 rounded-lg max-w-xl mx-auto flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primary">Edit Blog</h1>
          <p className="text-muted-foreground text-sm">Edit a blog post</p>
          <Form data={data!} />
        </div>
      </section>
    </main>
  );
}
