"use client";
import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BsFacebook, BsGithub, BsWhatsapp, BsYoutube } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="container section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
        <div className="flex flex-col justify-center gap-4 text-center md:text-start">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Hello, I&apos;m Yassin Ibrahim
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Turning ideas into powerful, responsive web applications! I&apos;m a
            passionate full-stack developer, specializing in building scalable,
            secure, and high-performance solutions with{" "}
            <span className="text-primary">
              Next.js, React.js, and Node.js.
            </span>{" "}
            Every project is designed for flawless user experiences on all
            devices — because your success deserves the best.
          </p>
          <div className="flex items-center justify-center md:justify-normal gap-4">
            <Link
              href={
                "https://drive.google.com/file/d/1luSZAQgShjCFrWfSOs7Tc0PY74OOZBKp/view"
              }
              target="_blank"
              className={`${buttonVariants({
                variant: "outline",
                rounded: "md",
              })}`}
            >
              Preview Cv
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href={"https://wa.me/201096492845"}
                className="bg-accent p-2 rounded-full hover:bg-green-600 transition-colors duration-200 ease-in-out"
              >
                <BsWhatsapp />
              </Link>
              <Link
                href={"https://www.facebook.com/yassen.ibrahim.hamed"}
                className="bg-accent p-2 rounded-full hover:bg-blue-600 transition-colors duration-200 ease-in-out"
              >
                <BsFacebook />
              </Link>
              <Link
                href={"https://www.youtube.com/@yassin-ibrahim-hamed"}
                className="bg-accent p-2 rounded-full hover:bg-red-600 transition-colors duration-200 ease-in-out"
              >
                <BsYoutube />
              </Link>
              <Link
                href={"https://github.com/yassin-x"}
                className="bg-accent p-2 rounded-full"
              >
                <BsGithub />
              </Link>
            </div>
          </div>
        </div>

        <div className="p-2 border-accent border-2 shadow-lg max-w-[300px] overflow-hidden mx-auto hidden md:block">
          <Image
            src={"/images/me.webp"}
            alt="Yassin Ibrahim"
            width={980}
            height={1080}
            loading="eager"
            priority
            className="w-full h-full object-cover shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
