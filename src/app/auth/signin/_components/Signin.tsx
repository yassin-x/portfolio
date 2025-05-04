"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

export default function Signin() {
  return (
    <section className="container section-gap-xl">
      <div className="bg-card element-center p-4 rounded-lg max-w-md mx-auto flex-col gap-4">
        <h1 className="text-2xl font-bold text-primary">Signin</h1>
        <Button
          variant={"secondary"}
          onClick={() => {
            signIn("google", {
              redirect: false,
              callbackUrl: "/",
            });
          }}
        >
          Signin With Google
        </Button>
      </div>
    </section>
  );
}
