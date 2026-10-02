"use client";

import { motion } from "framer-motion";
import { User, Server, CheckCircle2, Play, GitBranch, Cloud } from "lucide-react";
import { GithubIcon as Github } from "@/components/Icons";

export function DevOps() {
  const steps = [
    { icon: <User className="w-5 h-5" />, label: "Developer", desc: "Writes Code" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", desc: "Version Control" },
    { icon: <Play className="w-5 h-5" />, label: "Actions", desc: "CI/CD Pipeline" },
    { icon: <Server className="w-5 h-5" />, label: "Docker", desc: "Containerization" },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: "Testing", desc: "Automated Tests" },
    { icon: <Cloud className="w-5 h-5" />, label: "Cloud", desc: "Deployment (AWS)" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="devops" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 flex flex-col md:items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">DevOps & Infrastructure</h2>
            <div className="w-12 h-1 bg-foreground rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Passionate about automating workflows and building scalable deployment pipelines.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Desktop Pipeline */}
          <div className="hidden md:flex items-center justify-between relative p-12 glass rounded-3xl border border-white/5">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-16 right-16 h-0.5 bg-white/10 -translate-y-1/2 z-0 overflow-hidden">
              <motion.div 
                className="h-full bg-foreground"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
            
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="relative z-10 flex flex-col items-center gap-4 bg-background p-2 rounded-xl"
              >
                <div className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center text-foreground hover:scale-110 transition-transform cursor-default shadow-lg">
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="font-bold text-sm">{step.label}</div>
                  <div className="text-xs text-muted-foreground">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pipeline */}
          <div className="md:hidden flex flex-col items-center gap-8 relative p-8 glass rounded-3xl border border-white/5">
            {/* Connecting Line */}
            <div className="absolute top-16 bottom-16 left-1/2 w-0.5 bg-white/10 -translate-x-1/2 z-0 overflow-hidden">
              <motion.div 
                className="w-full bg-foreground"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </div>

            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="relative z-10 flex items-center gap-6 w-full max-w-[250px] bg-background p-2 rounded-xl"
              >
                <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-foreground shadow-lg flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <div className="font-bold text-sm">{step.label}</div>
                  <div className="text-xs text-muted-foreground">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {["Linux", "Docker", "CI/CD", "GitHub Actions", "AWS", "Automation", "n8n"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
