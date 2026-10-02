"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Code, Users } from "lucide-react";

export function Journey() {
  const journeyItems = [
    {
      type: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Computer Science Degree",
      organization: "University Name",
      date: "2020 - 2024",
      description: "Focused on software engineering, data structures, and algorithms. Built foundational knowledge in computer science principles.",
    },
    {
      type: "project",
      icon: <Code className="w-5 h-5" />,
      title: "Full-Stack Web Development Focus",
      organization: "Self-Directed Learning",
      date: "2022 - Present",
      description: "Mastered modern frontend frameworks like React and Next.js, alongside backend technologies like Node.js and Django.",
    },
    {
      type: "hackathon",
      icon: <Trophy className="w-5 h-5" />,
      title: "Open Source Contributor & Hackathons",
      organization: "Developer Community",
      date: "2023",
      description: "Participated in local hackathons building AI-powered tools. Contributed to various open-source repositories to improve accessibility.",
    },
    {
      type: "learning",
      icon: <Users className="w-5 h-5" />,
      title: "Cloud & DevOps Immersion",
      organization: "Continuous Learning",
      date: "2024",
      description: "Exploring AWS, Docker, and CI/CD pipelines to understand the complete lifecycle of modern web applications.",
    }
  ];

  return (
    <section id="journey" className="py-24 relative bg-foreground/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 flex flex-col md:items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Journey</h2>
            <div className="w-12 h-1 bg-foreground rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              My path in software engineering, education, and continuous learning.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full bg-background border-4 border-foreground/10 flex items-center justify-center z-10 text-foreground">
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-colors text-left">
                    <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-muted-foreground mb-4 inline-block">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <div className="text-foreground/70 font-medium text-sm mb-4">{item.organization}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
