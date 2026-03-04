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
      <ProgressiveBlur position="bottom" height="100px" className="fixed! bottom-0 inset-x-0" />
      <main className="relative">
        <Accueil />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
