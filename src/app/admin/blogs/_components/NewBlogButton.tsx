import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import React from "react";

export default function NewBlogButton() {
  return (
    <section>
      <div className="text-center">
        <Link
          href={`/${Routes.Admin}/${Pages.Blogs}/${Pages.New}`}
          className={`${buttonVariants({ variant: "default" })}`}
        >
          New Blog
        </Link>
      </div>
    </section>
  );
}
