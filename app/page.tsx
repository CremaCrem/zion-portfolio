import { TerminalWindow } from "@/components/TerminalWindow";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col py-16 space-y-32">
      {/* About Section */}
      <section id="about" className="scroll-mt-32">
        <TerminalWindow title="whoami">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-accent mb-4">Jeremy Zion L. Jamer</h1>
              <p className="text-xl sm:text-2xl text-primary">IT Instructor & Developer</p>
            </div>

            <AvailabilityBadge />

            <div className="space-y-4 text-dim leading-relaxed max-w-3xl">
              <p>
                BS Information Technology (Cum Laude, 1.45 GWA) from Partido State University, Class of 2026.
              </p>
              <p>
                Currently serving as an IT Instructor at IDSC in Ligao City, Albay. Previously, I built cataloging and archival software during a museum internship at Museo de Isarog, and led the development of a real-time object-detection AR farming game.
              </p>
              <p>
                I thrive at the intersection of practical problem-solving and engaging user experiences. Whether it's a desktop app, full-stack repository, or Unity game engine, I focus on delivering well-crafted, functional systems.
              </p>
            </div>
          </div>
        </TerminalWindow>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-32">
        <TerminalWindow title="cat skills.json">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-accent mb-4">Technical Stack</h3>
              <ul className="space-y-3 text-dim">
                <li><span className="text-primary font-bold">Languages:</span> JavaScript/TypeScript, Python, C++, C#</li>
                <li><span className="text-primary font-bold">Frontend:</span> React, Vue, Tailwind CSS</li>
                <li><span className="text-primary font-bold">Backend/DB:</span> Node.js, Express, MongoDB, SQL</li>
                <li><span className="text-primary font-bold">Desktop/Game:</span> Tauri, Unity, Machine Learning</li>
                <li><span className="text-primary font-bold">Tools:</span> Git, Virtual Networking (Tailscale, ngrok), Figma</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-accent mb-4">Languages & Interests</h3>
              <ul className="space-y-3 text-dim">
                <li><span className="text-primary font-bold">Spoken:</span> English (Fluent), Tagalog (Native), Bicolano (Native)</li>
                <li><span className="text-primary font-bold">Interests:</span> Philosophy, Music Theory, System Development, Automation Scripting</li>
              </ul>
            </div>
          </div>
        </TerminalWindow>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-accent mb-8 px-2">./projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-32">
        <TerminalWindow title="mail_client.exe">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-accent">Initiate Handshake</h2>
              <p className="text-dim leading-relaxed text-lg">
                Have a project in mind, a question about my work, or want to discuss a role?
                Send a packet through the secure channel or email me directly at <br />
                <a href="mailto:jzjamer@gmail.com" className="text-primary hover:text-accent underline underline-offset-4 decoration-dim hover:decoration-accent transition-colors mt-2 inline-block">jzjamer@gmail.com</a>.
              </p>
              <div className="text-dim space-y-2 border-l-2 border-accent/30 pl-4">
                <p>Location: Goa, Bicol 4422, Philippines</p>
                <p>Phone: (+63) 9686749052</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </TerminalWindow>
      </section>
    </main>
  );
}
