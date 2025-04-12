import React from "react";

export default function MainHeading({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <>
      <h2 className="uppercase text-muted-foreground font-semibold leading-4">
        {subTitle}
      </h2>
      <p className="text-primary font-bold text-4xl italic mb-4">{title}</p>
    </>
  );
}
