import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Sanjay</Heading>
      <Paragraph className="max-w-xl mt-4">
        {/* I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives */}
        Enthusiastic software engineer with over 2+ years of experience in building and delivering high-performance,
        scalable web applications. Skilled in completing projects on time with a strong understanding of web technologies,
        and focused on creating both functional and visually appealing solutions.
      </Paragraph>
      {/* <Paragraph className="max-w-xl mt-4">
        I&apos;m a senior software engineer with{" "}
        <Highlight>7 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph> */}
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
