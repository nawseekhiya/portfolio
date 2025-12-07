"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

export function Hero() {
  return (
    <Section className="flex min-h-[calc(100vh-3.5rem)] flex-col justify-center">
      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-4">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Building digital <br className="hidden sm:inline" />
            <span className="text-primary">experiences</span> that matter.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed">
            I'm a full-stack developer focused on crafting clean, accessible, and high-performance web applications.
            Transforming complex problems into elegant concepts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <Button size="lg" className="h-12 px-6 text-base" asChild>
            <a href="#projects">
              View Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-6 text-base" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <div className="flex gap-2 sm:ml-4">
             <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl" asChild>
                <a href="https://github.com/nawseekhiya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-6 w-6" />
                </a>
             </Button>
             <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl" asChild>
                <a href="https://linkedin.com/in/iamabhishekmohanty" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                </a>
             </Button>
             <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl" asChild>
                <a href="mailto:araj80317@gmail.com" aria-label="Email">
                    <Mail className="h-6 w-6" />
                </a>
             </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
