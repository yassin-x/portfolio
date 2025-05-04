import React from "react";
import Link from "../link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="container">
      <div className="element-center py-4 flex-col gap-4">
        <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
        <div className="flex items-center gap-2">
          <Link
            href={"https://wa.me/201096492845"}
            className="bg-accent p-2 rounded-full hover:bg-green-600 transition-colors duration-200 ease-in-out"
          >
            <BsWhatsapp className="w-6 h-6" />
          </Link>
          <Link
            href={"https://www.facebook.com/yassen.ibrahim.hamed"}
            className="bg-accent p-2 rounded-full hover:bg-blue-600 transition-colors duration-200 ease-in-out"
          >
            <BsFacebook className="w-6 h-6" />
          </Link>
          <Link
            href={"https://www.instagram.com/yassen.ibrahim.hamed/"}
            className="bg-accent p-2 rounded-full hover:bg-blue-600 transition-colors duration-200 ease-in-out"
          >
            <BsInstagram className="w-6 h-6" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/yassin-ibrahim-x/"}
            className="bg-accent p-2 rounded-full hover:bg-blue-600 transition-colors duration-200 ease-in-out"
          >
            <BsLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="border-t-2 border-accent py-4">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
