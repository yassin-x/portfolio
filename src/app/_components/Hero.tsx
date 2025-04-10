"use client";
import Link from "@/components/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="container section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Hello, I&apos;m{" "}
            <TypeAnimation
              sequence={[
                "Yassin Ibrahim",
                2000,
                "Full-Stack Web Developer < / >",
                2000,
              ]}
              speed={10}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-primary select-none"
            />
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Passionate full-stack developer specializing in building
            high-performance web applications using modern technologies like{" "}
            <span className="text-primary">
              Next.js, React.js, and Node.js.
            </span>{" "}
            Focused on scalability, security, and seamless user experiences.
          </p>
          <div className="flex items-center gap-4">
            <Button variant={"outline"}>
              <Link
                href={
                  "https://drive.google.com/file/d/1luSZAQgShjCFrWfSOs7Tc0PY74OOZBKp/view"
                }
                target="_blank"
              >
                Preview Cv
              </Link>
            </Button>
            <Button variant={"ghost"} className="bg-transparent!">
              <Link href={"/contact"}>Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="p-2 border-accent border-2 rounded-lg shadow-lg max-w-[300px] overflow-hidden mx-auto">
          <Image
            src={"/me.webp"}
            alt="Yassin Ibrahim"
            width={980}
            height={1080}
            loading="eager"
            priority={true}
            className="w-full h-full object-cover shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
