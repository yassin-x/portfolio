import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import React from "react";

export default function NewProjectButton() {
  return (
    <section>
      <div className="text-center">
        <Link
          href={`/${Routes.Admin}/${Pages.Projects}/${Pages.New}`}
          className={`${buttonVariants({ variant: "default", rounded: "md" })}`}
        >
          New Project
        </Link>
      </div>
    </section>
  );
}
