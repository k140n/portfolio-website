"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/Icons";
import { Terminal } from "./Terminal";
import { profile } from "@/data/profile";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{profile.role}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            >
              {profile.bio.split(" ").map((word, i) => (
                <span 
                  key={i} 
                  className={word.toLowerCase().includes("software") ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500" : "text-white"}
                >
                  {word}{" "}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {profile.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-4"
            >
              <Link
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>

              <Link
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg transition-colors ml-auto md:ml-0"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              
              <Link
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative elements around terminal */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-foreground/20 to-transparent rounded-xl blur-lg opacity-50" />
              <Terminal />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
