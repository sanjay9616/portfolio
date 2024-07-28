import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Angular",
      src: "/images/logos/angular.png",
      className: "h-10 w-8",
    },
    {
      title: "React JS",
      src: "/images/logos/react.png",
      className: "h-10 w-10",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      title: "Express JS",
      src: "/images/logos/express.webp",
      className: "h-10 w-8",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",
      className: "h-10 w-12",
    },
    {
      title: "Mongo DB",
      src: "/images/logos/mongodb.svg",
      className: "h-10 w-10",
    },
    {
      title: "SCSS",
      src: "/images/logos/scss.png",
      className: "h-10 w-8",
    },
    {
      title: "CSS",
      src: "/images/logos/css.png",
      className: "h-10 w-8",
    },
    {
      title: "Bootstrap",
      src: "/images/logos/bootstrap.png",
      className: "h-10 w-8",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
