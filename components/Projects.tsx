import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Diabetic Retinopathy Prediction",
    category: "AI / Machine Learning",
    description: "An AI-based system using TensorFlow and Django for real-time image classification with role-based access.",
    tech: ["Python", "TensorFlow", "Django", "MySQL"],
    link: "https://github.com/muvafakpk/Diabetic-Retinopathy-Prediction",
    image: "/project-medical.png",
    glow: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "E-Commerce Management",
    category: "Full Stack Development",
    description: "A full-stack e-commerce application with product listing, cart, and scalable REST APIs using Spring Boot.",
    tech: ["React.js", "Java", "Spring Boot", "MySQL"],
    link: "https://github.com/muvafakpk/E-Commerce-Buying-and-Order-Management-System",
    image: "/project-ecommerce.png",
    glow: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Real Gym Orimukk",
    category: "Web Development",
    description: "A high-performance gym website with workout tracking and interactive features.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    link: "https://github.com/muvafakpk/Real_gym",
    image: "/project-gym.png",
    glow: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Digital Book Library",
    category: "Web Application",
    description: "An online platform for buying and reading books with a smooth user experience.",
    tech: ["JavaScript", "React", "CSS"],
    link: "https://github.com/muvafakpk/Book",
    image: "/project-books.png",
    glow: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "MAHDANUL ULUM",
    category: "Community Platform",
    description: "A community-focused landing page and management system.",
    tech: ["HTML", "SCSS", "JS"],
    link: "https://github.com/muvafakpk/MAHDANUL-ULUM",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070&auto=format&fit=crop",
    glow: "from-rose-500/20 to-pink-500/20"
  },
  {
    title: "QR Attendance System",
    category: "Security / Utility",
    description: "A high-tech attendance tracking system using dynamic QR codes for secure check-ins.",
    tech: ["Python", "OpenCV", "Flask"],
    link: "https://github.com/muvafakpk/QR-ATTENDENCE-SYSTEM",
    image: "/project-medical.png",
    glow: "from-violet-500/20 to-fuchsia-500/20"
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg-projects.png" 
          alt="" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/50 to-[#121212]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Selected <span className="text-neutral-500 italic">Deliverables.</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl">
            A showcase of complex systems built with precision and modern engineering principles.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches ? -10 : 0 
              }}
              className={`group relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] p-4 md:p-10 transition-all duration-500 md:hover:bg-white/[0.06] md:hover:border-white/[0.15] md:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] block`}
            >
              {/* Neon Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10">
                {/* Project Image Container */}
                <div className="relative h-32 md:h-64 w-full mb-4 md:mb-8 overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-500">
                   <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start mb-2 md:mb-4 gap-2">
                  <span className="text-[10px] md:text-sm font-bold tracking-widest text-emerald-400/80 uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <div 
                      className="p-1.5 md:p-3 rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:scale-110 active:scale-95"
                    >
                      <Github className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="p-1.5 md:p-3 rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:scale-110 active:scale-95 cursor-not-allowed opacity-50">
                      <ExternalLink className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg md:text-4xl font-bold mb-2 md:mb-4 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-xs md:text-lg text-neutral-400 mb-4 md:mb-8 max-w-md leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-none">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 md:px-4 md:py-2 text-[8px] md:text-xs font-bold rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-neutral-300 tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors duration-700" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
