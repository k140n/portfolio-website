import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { DevOps } from "@/components/DevOps";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <DevOps />
      <Contact />
    </>
  );
}
