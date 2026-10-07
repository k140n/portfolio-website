"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import Link from "next/link";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-foreground/[0.01]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 flex flex-col md:items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education & Certifications</h2>
            <div className="w-12 h-1 bg-foreground rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              My academic background and professional qualifications.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-foreground/10 rounded-lg text-foreground">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {profile.education?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-colors relative group"
                >
                  <div className="absolute top-6 right-6 text-xs font-mono px-2 py-1 bg-white/5 rounded text-muted-foreground">
                    {item.duration}
                  </div>
                  <h4 className="text-xl font-bold pr-24 mb-1">{item.degree}</h4>
                  <div className="text-foreground/70 font-medium text-sm mb-4">{item.institution}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-foreground/10 rounded-lg text-foreground">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {profile.certifications?.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-xl font-bold pr-4">{cert.name}</h4>
                    <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-muted-foreground whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                  <div className="text-foreground/70 font-medium text-sm mb-4">{cert.issuer}</div>
                  {cert.link && cert.link !== "#" && (
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      View Credential <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
