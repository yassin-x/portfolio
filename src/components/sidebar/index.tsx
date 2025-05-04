"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "../link";
import AdminNav from "./Nav";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <aside
        className={`
          fixed top-0 left-0 h-full w-full md:w-64 shadow-md flex flex-col backdrop-blur-2xl border-r border-accent bg-background z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        <div className="p-4 flex justify-between items-center border-b border-accent">
          <Link href={"/"}>
            <div className="flex flex-col items-start group">
              <h1 className="text-primary text-lg tracking-wide group-hover:text-primary/90 transition-colors duration-200 ease-in-out">
                Yassin Ibrahim
              </h1>
              <p className="text-muted-foreground text-sm">
                Full-Stack Web Developer {"< / >"}
              </p>
            </div>
          </Link>
          <Button
            className={`md:hidden`}
            onClick={() => setIsOpen(false)}
            variant={"outline"}
          >
            <X size={20} />
          </Button>
        </div>
        <AdminNav />
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <Button
        className={`fixed top-4 right-4 z-50 p-2 md:hidden ${
          isOpen ? "hidden select-none" : ""
        }`}
        onClick={() => setIsOpen(true)}
        variant={"outline"}
      >
        <Menu size={20} />
      </Button>

      <main className="flex-1 p-4 ">{children}</main>
    </div>
  );
}
