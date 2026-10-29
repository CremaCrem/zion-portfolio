export function Footer() {
  return (
    <footer className="border-t border-dim/20 py-8 mt-16 text-center text-dim text-sm bg-base">
      <nav className="flex justify-center gap-6 mb-3">
        <a href="https://github.com/CremaCrem" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">&gt; github</a>
        <a href="https://www.linkedin.com/in/jeremyzionjamer" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">&gt; linkedin</a>
      </nav>
      <p>© {new Date().getFullYear()} Jeremy Zion L. Jamer. All rights reserved.</p>
    </footer>
  );
}
