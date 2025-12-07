import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </>
  );
}
