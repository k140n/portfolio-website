"use client";

import { motion } from "framer-motion";
import { Code2, Server, Workflow } from "lucide-react";
import { profile } from "@/data/profile";

export function About() {
  const cards = [
    {
      icon: <Code2 className="w-6 h-6 text-foreground" />,
      title: "Frontend Engineering",
      description: "Building responsive, accessible, and performant web applications using modern frameworks."
    },
    {
      icon: <Server className="w-6 h-6 text-foreground" />,
      title: "Backend & Cloud",
      description: "Designing scalable APIs, managing databases, and deploying infrastructure on cloud platforms."
    },
    {
      icon: <Workflow className="w-6 h-6 text-foreground" />,
      title: "DevOps & Automation",
      description: "Streamlining workflows with CI/CD pipelines, Docker containers, and automation tools."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
              <div className="w-12 h-1 bg-foreground rounded-full"></div>
            </div>
            
            <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Hello! I&apos;m {profile.name}, a {profile.role.toLowerCase()} who enjoys building practical applications, 
                learning new technologies, and solving programming problems. 
              </p>
              <p>
                My approach to software engineering is grounded in pragmatism and curiosity. 
                Whether I&apos;m designing a complex backend architecture, crafting a smooth user interface, 
                or automating repetitive tasks, I focus on writing clean, maintainable code that 
                delivers real value.
              </p>
              <p>
                Currently, I&apos;m particularly interested in exploring the intersections of 
                {profile.interests.slice(0, -1).join(", ")}, and {profile.interests[profile.interests.length - 1]}.
              </p>
            </div>
          </motion.div>

          {/* Value Cards Section */}
          <div className="flex-1 grid gap-4 w-full">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
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
