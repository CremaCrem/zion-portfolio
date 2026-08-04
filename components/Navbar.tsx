import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dim/20 bg-base/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-accent hover:opacity-80 transition-opacity">
          ~/cremacrem
        </Link>
        <nav className="flex items-center space-x-6 text-sm">
          <Link href="/#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-accent border border-accent/30 px-3 py-1.5 rounded hover:bg-accent/10 transition-colors">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
