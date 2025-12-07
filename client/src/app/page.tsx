import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
