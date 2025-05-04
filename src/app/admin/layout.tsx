import Sidebar from "@/components/sidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Yassin Ibrahim | Admin",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://yassin.icu/admin",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
