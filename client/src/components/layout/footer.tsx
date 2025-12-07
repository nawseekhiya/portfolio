
export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-6">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm text-foreground/60">
        <p>© {new Date().getFullYear()} Dev Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground/90 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-foreground/90 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-foreground/90 transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
