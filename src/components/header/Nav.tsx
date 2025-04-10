"use client";
import React, { useState } from "react";
import Link from "../link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { MenuIcon, XIcon } from "lucide-react";

export default function Nav() {
  const links = [
    {
      id: crypto.randomUUID(),
      name: "Blogs",
      href: "/blogs",
    },
    {
      id: crypto.randomUUID(),
      name: "Services",
      href: "/services",
    },
    {
      id: crypto.randomUUID(),
      name: "Contact Us",
      href: "/contact",
    },
  ];

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <ul className="md:flex justify-center items-center gap-3 hidden">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out ${
                pathname === link.href ? "text-primary" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button
        className="md:hidden"
        variant={"outline"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon />
      </Button>
      <div
        className={`${
          menuOpen
            ? "flex translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        } backdrop-blur-2xl h-full fixed top-0 right-0 w-full z-50 p-6 flex-col md:translate-x-full transition-transform duration-300 ease-in-out`}
      >
        <Button
          className="md:hidden w-fit fixed top-4 right-4"
          variant={"outline"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <XIcon />
        </Button>
        <ul className="flex flex-col items-start gap-3">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out ${
                  pathname === link.href ? "text-primary" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
