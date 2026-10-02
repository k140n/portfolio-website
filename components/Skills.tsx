"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative bg-foreground/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 flex flex-col md:items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
            <div className="w-12 h-1 bg-foreground rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Technologies and tools I use to build robust software solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl glass border border-white/5"
            >
              <h3 className="text-xl font-medium mb-6 text-foreground/90">{skillGroup.category}</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skillGroup.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
