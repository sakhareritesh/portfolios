import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Achievements from "@/components/achievements";
import Education from "@/components/Education";
import Footer from "@/components/footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}
