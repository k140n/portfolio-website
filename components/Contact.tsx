"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/Icons";
import { profile } from "@/data/profile";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 flex flex-col md:items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
            <div className="w-12 h-1 bg-foreground rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Have a question or want to work together? Leave a message.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl border border-white/5 space-y-8 h-full">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-6">
                <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <div className="font-medium group-hover:text-foreground transition-colors">{profile.contact.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <div className="font-medium">{profile.contact.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <div className="text-sm text-muted-foreground mb-4">Connect with me</div>
                <div className="flex gap-4">
                  <a 
                    href={profile.contact.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={profile.contact.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl border border-white/5 space-y-6 h-full flex flex-col">
              <div className="space-y-4 flex-grow">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-foreground resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full py-4 bg-foreground text-background rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-auto"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
