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
      <AnimatedThemeToggler className="fixed top-4 right-4 md:top-8 md:right-8 z-100 cursor-pointer p-4 rounded-full border-2 border-(--border) bg-(--background) shadow-md" />
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
