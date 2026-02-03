import Accueil from "@/components/Accueil";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Home() {
  return (
    <>
      <AnimatedThemeToggler style={{ position: "fixed", top: "2rem", right: "2rem", zIndex: 100, cursor: "pointer", padding: "1rem", borderRadius: "50%", border: "2px solid var(--border)", background: "var(--background)", boxShadow: "0px 2px 2px hsla(0, 0%, 0%, 0.07), 0px 4px 4px hsla(0, 0%, 0%, 0.15)" }} />
      <ScrollProgress />
      <main className="relative">
        <Accueil />
        <About />
        <Projects />
        <Contact />
        <ProgressiveBlur position="bottom" height="100px" className="sticky bottom-0" />
      </main>
    </>
  );
}
