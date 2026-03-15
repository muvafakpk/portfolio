import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Layers, 
  Database, 
  Settings, 
  Cpu,
  Globe,
  DatabaseZap,
  Layout,
  Server,
  Wrench,
  Lightbulb
} from "lucide-react";

const SKILLS = [
  {
    category: "Languages",
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    items: ["Java", "Python", "C"],
    glow: "rgba(52, 211, 153, 0.2)"
  },
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Web Design"],
    glow: "rgba(34, 211, 238, 0.2)"
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-blue-400" />,
    items: ["Spring Boot", "Spring Framework", "Hibernate", "REST API Development"],
    glow: "rgba(96, 165, 250, 0.2)"
  },
  {
    category: "Database",
    icon: <DatabaseZap className="w-6 h-6 text-purple-400" />,
    items: ["MySQL", "Database Design", "Query Optimization"],
    glow: "rgba(192, 132, 252, 0.2)"
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    items: ["VS Code", "Android Studio", "Eclipse", "Git", "GitHub"],
    glow: "rgba(251, 146, 60, 0.2)"
  },
  {
    category: "Concepts",
    icon: <Lightbulb className="w-6 h-6 text-rose-400" />,
    items: ["OOP", "MVC", "SDLC", "API Integration", "Agile"],
    glow: "rgba(251, 113, 133, 0.2)"
  }
];

function SkillCard({ skillGroup, index }: { skillGroup: typeof SKILLS[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15]"
    >
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${skillGroup.glow}, transparent 40%)`,
        }}
      />

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-2 md:gap-4 mb-4 md:mb-6">
          <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
            {skillGroup.icon}
          </div>
          <h3 className="text-sm md:text-xl font-bold text-white tracking-tight text-center md:text-left">
            {skillGroup.category}
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2">
          {skillGroup.items.map((skill) => (
            <motion.span 
              key={skill}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/5 text-[10px] md:text-sm text-neutral-400 group-hover:text-neutral-200 group-hover:border-white/10 transition-all duration-300 backdrop-blur-sm shadow-xl"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#121212] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg-skills.png" 
          alt="" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/50 to-[#121212]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter">
            Technical <span className="text-neutral-500 italic">Arsenal.</span>
          </h2>
          <p className="text-neutral-500 text-lg mb-16 max-w-2xl mx-auto md:mx-0">
            A comprehensive stack of tools and technologies honed through rigorous development and problem-solving.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 perspective-1000">
          {SKILLS.map((skillGroup, index) => (
            <SkillCard key={index} skillGroup={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
