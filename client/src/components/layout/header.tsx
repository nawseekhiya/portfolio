"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const menuContentRef = React.useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = React.useState(0);

  // Measure menu content height on mount and resize
  React.useEffect(() => {
    const measureHeight = () => {
      if (menuContentRef.current) {
        setMenuHeight(menuContentRef.current.scrollHeight);
      }
    };
    measureHeight();
    window.addEventListener("resize", measureHeight);
    return () => window.removeEventListener("resize", measureHeight);
  }, []);

  // Close menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const headerHeight = isOpen ? 56 + menuHeight : 56; // 56px = h-14

  return (
    <motion.header
      initial={{ height: 56 }}
      animate={{ height: headerHeight }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30
      }}
      style={{ borderRadius: 24 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl min-w-[calc(375px*0.95)] border border-border/40 bg-background/60 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-background/30 overflow-hidden"
    >
      {/* Top Bar */}
      <div className="relative flex h-14 items-center justify-between px-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 font-bold text-lg tracking-tight whitespace-nowrap"
          >
            <span>Abhishek Mohanty<span className="text-primary">.</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Blog CTA */}
          <Button variant="default" size="sm" className="hidden sm:inline-flex rounded-full gap-1 px-5" asChild>
            <Link href="https://nawseekhiya.hashnode.dev/" target="_blank" rel="noopener noreferrer">
              Blog <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>

          <ModeToggle />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full ml-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Content - Always in DOM, clipped by overflow:hidden */}
      <div 
        ref={menuContentRef}
        className="md:hidden border-t border-border/40"
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                y: isOpen ? 0 : 10 
              }}
              transition={{ 
                delay: isOpen ? index * 0.05 : 0,
                duration: 0.2 
              }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 block"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          {/* Mobile Blog Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              y: isOpen ? 0 : 10 
            }}
            transition={{ 
              delay: isOpen ? navItems.length * 0.05 : 0,
              duration: 0.2 
            }}
          >
            <Button asChild variant="default" className="w-full mt-2" onClick={() => setIsOpen(false)}>
              <Link href="https://nawseekhiya.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                Blog <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
