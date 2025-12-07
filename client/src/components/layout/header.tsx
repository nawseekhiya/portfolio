"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" }, // Using route as per plan, though MVP might scroll first
  { name: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full border border-border/40 bg-background/60 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-background/30">
      <div className="relative flex h-14 items-center justify-between px-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 font-bold text-lg tracking-tight">
            <span>Abhishek Mohanty<span className="text-primary">.</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-foreground/70 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
           <Button variant="default" size="sm" className="hidden sm:inline-flex rounded-full gap-1 px-5" asChild>
             <Link href="https://nawseekhiya.hashnode.dev/" target="_blank" rel="noopener noreferrer">
               Blog <ArrowUpRight className="h-4 w-4" />
             </Link>
           </Button>
           <ModeToggle />
        </div>
      </div>
    </header>
  );
}
