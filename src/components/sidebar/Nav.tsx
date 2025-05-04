import { Pages, Routes } from "@/constants/enums";
import React from "react";
import Link from "../link";

export default function AdminNav() {
  const links = [
    {
      id: crypto.randomUUID(),
      name: "Blogs",
      href: Pages.Blogs,
    },
    {
      id: crypto.randomUUID(),
      name: "Projects",
      href: Pages.Projects,
    },
  ];
  return (
    <nav>
      <ul className="flex p-4 flex-col gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`/${Routes.Admin}/${link.href}`}
              className={`text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out `}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
