"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/Icons";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 flex flex-col md:items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <div className="w-12 h-1 bg-foreground rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              A selection of my recent work, side projects, and open-source contributions.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative grid md:grid-cols-2 gap-8 items-center rounded-3xl p-6 md:p-8 glass border border-white/5 hover:border-white/10 transition-all"
            >
              {/* Project Visual Placeholder */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground/5 border border-white/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-muted-foreground font-mono text-sm opacity-50">
                  {project.image}
                </span>
              </div>

              {/* Project Info */}
              <div className="flex flex-col h-full justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-muted-foreground border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {project.githubUrl !== "[Add GitHub URL]" && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5 text-muted-foreground hover:text-foreground"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}

                  {project.liveUrl && project.liveUrl !== "[Add Live URL]" && (
                    <Link
                      href={project.liveUrl as string}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5 text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
