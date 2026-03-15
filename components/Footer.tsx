"use client";
import { motion } from "framer-motion";
import { Github, Mail, Phone, ExternalLink, Download, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8129886664",
      href: "tel:+918129886664",
      color: "text-emerald-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "muvafakpk@gmail.com",
      href: "mailto:muvafakpk@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "muvafakpk",
      href: "https://github.com/muvafakpk",
      color: "text-white"
    }
  ];

  return (
    <footer className="relative z-20 bg-[#121212] pt-20 pb-10 px-6 md:px-12 lg:px-24 text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">
          
          {/* CTA / Resume Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">
              Ready to <br />
              <span className="text-neutral-500 italic">Collaborate?</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-md leading-relaxed">
              I'm always open to discussing high-impact projects and innovative technology solutions.
            </p>
            
            <a 
              href="/resume.png" 
              download="Muvafak_Resume.png"
              className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl transition-all duration-300 hover:bg-emerald-400 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target={item.label === "GitHub" ? "_blank" : undefined}
                  rel={item.label === "GitHub" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.1] hover:-translate-y-1"
                >
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-1">{item.label}</p>
                    <p className="text-lg md:text-xl font-bold text-white tracking-tight">{item.value}</p>
                  </div>
                  <ArrowUpRight className="ml-auto w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-neutral-500 text-sm font-medium">
            © {currentYear} <span className="text-neutral-300">Muvafak Pattillath.</span> All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="https://github.com/muvafakpk" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/muvafakpk/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
