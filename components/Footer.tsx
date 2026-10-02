"use client";

import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-lg font-bold tracking-tighter">
            {profile.name}<span className="text-muted-foreground">.dev</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          <Link href={profile.contact.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</Link>
          <Link href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
