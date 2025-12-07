"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-border/40 bg-background py-6">
      <Button 
        variant="default" 
        size="icon" 
        className="rounded-full absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
        <span className="sr-only">Scroll to top</span>
      </Button>

      <div className="container mx-auto max-w-screen-xl mt-4 md:mt-auto lg:mt-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm text-foreground/60">
        <p>© {new Date().getFullYear()} Abhishek Mohanty. All rights reserved.</p>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/nawseekhiya" className="hover:text-foreground/90 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/iamabhishekmohanty/" className="hover:text-foreground/90 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
