"use client";
import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1 (0% to ~25% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2 (30% to ~55% scroll)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.55], [100, -100]);

  // Section 3 (60% to ~90% scroll)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.8, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.95], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center p-6"
      >
        <div className="text-center translate-y-[-10%] md:translate-y-[-5%]">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[calc(-0.06em)] text-white leading-[1.0] drop-shadow-2xl mb-8 uppercase"
          >
            Muvafak<br />
            <span className="text-neutral-500 italic">Pattillath.</span>
          </motion.h1>
          <p className="text-sm md:text-2xl font-bold tracking-[0.4em] text-emerald-400 uppercase opacity-90">
            Full Stack & AI Engineer
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start pl-[8%] md:pl-[12%] p-6"
      >
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none max-w-4xl uppercase">
          Engineering <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">
            Scalable Systems
          </span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end pr-[8%] md:pr-[12%] text-right p-6"
      >
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none max-w-4xl uppercase">
          Bridging AI <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
            & Development
          </span>
        </h2>
      </motion.div>
    </div>
  );
}
