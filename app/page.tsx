"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white/20 text-white">
      {/* 500vh container mapped to scrollYProgress */}
      <div ref={containerRef} className="h-[500vh] relative w-full">
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>
      
      <div className="relative z-20">
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
