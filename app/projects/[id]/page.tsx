import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/Icons";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="space-y-6 mb-16">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span key={tech} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-md text-muted-foreground border border-white/5">
                {tech}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.githubUrl !== "[Add GitHub URL]" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
            
            {project.liveUrl !== "[Add Live URL]" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video w-full bg-white/5 border border-white/10 rounded-2xl mb-24 flex items-center justify-center">
          <span className="text-muted-foreground font-mono">
            {project.image}
          </span>
        </div>

        {/* Case Study Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <div className="p-6 rounded-xl glass border border-white/5 text-muted-foreground leading-relaxed">
                {project.details.problem}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <div className="p-6 rounded-xl glass border border-white/5 text-muted-foreground leading-relaxed">
                {project.details.solution}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Development Challenges</h2>
              <div className="p-6 rounded-xl glass border border-white/5 text-muted-foreground leading-relaxed">
                {project.details.challenges}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
              <div className="p-6 rounded-xl glass border border-white/5 text-muted-foreground leading-relaxed">
                {project.details.learnings}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <section>
              <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">Key Features</h3>
              <ul className="space-y-3">
                {project.details.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">Architecture</h3>
              <div className="text-muted-foreground text-sm leading-relaxed">
                {project.details.architecture}
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
