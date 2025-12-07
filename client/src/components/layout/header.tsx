"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "/projects" }, // Using route as per plan, though MVP might scroll first
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
      <div className="container mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 font-bold text-lg tracking-tight">
            <span>Abhishek Mohanty<span className="text-primary">.</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/60 transition-colors hover:text-foreground/90"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
           {/* Mobile Menu Placeholder - omitting full mobile menu for initial file creation */}
           <ModeToggle />
        </div>
      </div>
    </header>
  );
}
