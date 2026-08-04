import { projects } from "@/data/projects";
import { TerminalWindow } from "@/components/TerminalWindow";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) return {};

  return {
    title: `${project.title} | Jeremy Zion L. Jamer`,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main data-project={project.slug} className="flex-1 flex flex-col py-16">
      <Link href="/#projects" className="text-dim hover:text-accent-text transition-colors mb-8 inline-block w-max font-bold">
        &larr; cd ..
      </Link>
      
      <TerminalWindow 
        title={`./projects/${project.slug}.sh`} 
        className="w-full bg-bg-project border-accent/50 shadow-2xl shadow-accent/10 transition-colors duration-500"
        style={{ backgroundImage: 'var(--bg-project-image)', backgroundSize: 'var(--bg-project-size)' }}
      >
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold text-accent-text font-display mb-4 leading-tight">{project.title}</h1>
            <p className="text-xl text-text-project font-medium opacity-90 leading-relaxed max-w-3xl">{project.oneLiner}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-y border-text-project/10 py-8">
            <div>
              <h3 className="text-sm font-bold text-text-project opacity-60 mb-2 uppercase tracking-[0.18em]">Role</h3>
              <p className="text-text-project text-lg font-medium">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-project opacity-60 mb-2 uppercase tracking-[0.18em]">Category</h3>
              <p className="text-text-project text-lg font-medium">{project.category}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent-text font-display">System Architecture & Overview</h3>
            <p className="text-text-project opacity-80 leading-relaxed text-lg max-w-4xl">{project.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent-text font-display">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map(tech => (
                <span key={tech} className="text-sm font-semibold px-4 py-2 rounded-full border border-accent/40 text-text-project bg-text-project/5 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div className="pt-8 flex flex-wrap gap-4">
              {project.links.map(link => (
                <a 
                  key={link.href} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-accent text-bg-project font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </TerminalWindow>
    </main>
  );
}
