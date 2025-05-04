import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import { getServerSession } from "next-auth";
import { NextAuthOptions } from "@/server/NextAuth";
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Yassin Ibrahim",
  description:
    "Passionate full-stack developer specializing in building high-performance web applications using modern technologies like Next.js, React.js, and Node.js. Focused on scalability, security, and seamless user experiences.",
  icons: {
    icon: "/thh.webp",
    shortcut: "/thh.webp",
    apple: "/thh.webp",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/thh.webp",
    },
  },
  keywords: [
    "Yassin Ibrahim",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Applications",
    "Scalable Web Apps",
    "High-Performance Websites",
    "Responsive Design",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Design",
    "Web Security",
    "Database Management",
    "APIs Development",
    "Web Performance Optimization",
    "Cloud Development",
    "Cloud Computing",
    "SEO Optimization",
    "ReactJS Development",
    "JavaScript Frameworks",
    "Frontend Technologies",
    "Backend Technologies",
    "Web Development Best Practices",
    "Cross-Platform Development",
    "Tech Stack Expertise",
    "Modern Web Development",
    "Continuous Integration",
    "Web Development Trends",
    "Web Technologies",
    "Node.js APIs",
    "Express.js Developer",
    "GraphQL Developer",
    "RESTful APIs",
    "JWT Authentication",
    "Web Design",
    "Software Development",
    "Software Engineering",
    "Programming",
    "Tech Enthusiast",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialSession = await getServerSession(NextAuthOptions);

  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <NextAuthSessionProvider>
          <Header initialSession={initialSession} />
          {children}
          <Toaster
            position="top-center"
            duration={3000}
            theme="dark"
            closeButton={true}
          />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
