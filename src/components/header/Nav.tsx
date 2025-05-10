"use client";
import React, { useState } from "react";
import Link from "../link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { useClientSession } from "@/hooks/useClientSession";
import { Session } from "next-auth";
import { Pages, Routes } from "@/constants/enums";

export default function Nav({
  initialSession,
}: {
  initialSession: Session | null;
}) {
  const links = [
    {
      name: "Blogs",
      href: Pages.Blogs,
    },
    {
      name: "Projects",
      href: Pages.Projects,
    },
  ];

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { data } = useClientSession(initialSession);
  return (
    <nav>
      <ul className="hidden md:flex items-center justify-center gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wider ease-in-out  ${
                pathname.startsWith(link.href) ? "text-primary" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        {data?.user && (
          <li>
            <Link
              href={`/${Routes.Admin}`}
              className={`text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wider ease-in-out ${
                pathname.startsWith(Routes.Admin) ? "text-primary" : ""
              }`}
            >
              Admin
            </Link>
          </li>
        )}
      </ul>
      <Button
        className={`md:hidden`}
        variant={"outline"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon />
      </Button>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:translate-x-full transition-opacity duration-300 ease-in-out
       ${
         menuOpen
           ? "flex translate-x-0 pointer-events-auto"
           : "translate-x-full pointer-events-none"
       }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="absolute top-4 right-4 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            className="md:hidden"
            variant="outline"
            onClick={() => setMenuOpen(false)}
          >
            <XIcon />
          </Button>
        </div>
      </div>

      <div
        className={`bg-card/20 backdrop-blur-2xl h-screen overflow-y-hidden fixed top-0 left-0 w-[70%] z-50 p-6 flex-col md:-translate-x-full transition-transform duration-300 ease-in-out ${
          menuOpen
            ? "flex translate-x-0 pointer-events-auto"
            : "-translate-x-full pointer-events-none"
        }`}
      >
        {/* <div className="element-center">
          <Image
            src={"/images/logo.png"}
            width={980}
            height={1080}
            alt="Visionaries logo"
            priority
            className="w-12 h-12"
          />
        </div> */}
        <ul className="flex flex-col items-start gap-4 mt-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wider ease-in-out ${
                  pathname.startsWith(link.href) ? "text-primary" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {data?.user && (
            <li>
              <Link
                href={`/${Routes.Admin}`}
                className={`text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wider ease-in-out ${
                  pathname.startsWith(Routes.Admin) ? "text-primary" : ""
                }`}
              >
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
