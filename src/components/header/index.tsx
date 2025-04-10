import React from "react";
import Link from "../link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="py-3 flex flex-col justify-center border-b border-accent sticky top-0 z-40 w-full ">
      <div className="h-full inset-0 w-full absolute backdrop-blur -z-40"></div>
      <div className="container flex items-center">
        <div className="w-full flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex flex-col items-start group">
              <h1 className="text-primary text-xl tracking-wide group-hover:text-primary/90 transition-colors duration-200 ease-in-out">
                Yassin Ibrahim
              </h1>
              <p className="text-muted-foreground text-sm">
                Full-Stack Web Developer {"< / >"}
              </p>
            </div>
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  );
}
