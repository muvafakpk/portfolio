"use client";

const EXPERIENCE = [
  {
    company: "Java Full Stack Development Training",
    role: "Full Stack Intern",
    period: "Internship / Training",
    description: [
      "Built full-stack applications using Java, Spring Boot, and React.js.",
      "Developed backend services and REST APIs with secure authentication.",
      "Integrated frontend interfaces with RESTful services.",
      "Managed database connectivity and application deployment concepts."
    ],
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "REST API"]
  }
];

const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "College of Engineering Trikaripur, Kasaragod, Kerala",
    period: "2021 - 2025",
    score: "CGPA: 6.7"
  },
  {
    degree: "Higher Secondary Education",
    institution: "MRHSS Padne, Kasaragod, Kerala",
    period: "2019 - 2021",
    score: "Percentage: 89%"
  }
];

export default function Experience() {
  return (
    <section className="relative z-20 bg-[#121212] py-20 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-4 md:gap-24">
          
          {/* Internship Section */}
          <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight">Experience</h2>
            <div className="space-y-8 md:space-y-12">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="relative pl-4 md:pl-8 border-l border-white/10 group">
                  <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-transform duration-300 group-hover:scale-150" />
                  
                  <div className="mb-2 flex flex-col items-start gap-1 md:gap-4">
                    <h3 className="text-sm md:text-2xl font-bold text-white uppercase tracking-tight">{exp.company}</h3>
                    <span className="text-[10px] md:text-sm font-medium text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-emerald-400/20 lowercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-xs md:text-lg font-medium text-neutral-400 mb-4 md:mb-6">{exp.role}</h4>
                  
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-[10px] md:text-neutral-400 flex items-start leading-tight md:leading-normal">
                        <span className="mr-2 md:mr-3 mt-1.5 md:mt-2 block w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/20 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-[8px] md:text-xs font-mono text-neutral-500 border border-white/5 bg-white/[0.02] px-1.5 py-0.5 md:px-2 md:py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight">Education</h2>
            <div className="space-y-8 md:space-y-12">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-4 md:pl-8 border-l border-white/10 group">
                  <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-transform duration-300 group-hover:scale-150" />
                  
                  <div className="mb-2 flex flex-col items-start gap-1 md:gap-4">
                    <h3 className="text-sm md:text-xl font-bold text-white pr-4 uppercase tracking-tight">{edu.degree}</h3>
                    <span className="text-[10px] md:text-sm font-medium text-blue-400/80 bg-blue-400/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-blue-400/20 lowercase tracking-wider">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-[10px] md:text-neutral-400 mb-1 md:mb-2 leading-tight">{edu.institution}</p>
                  <p className="text-[8px] md:text-sm font-mono text-blue-400/60 uppercase tracking-widest">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
