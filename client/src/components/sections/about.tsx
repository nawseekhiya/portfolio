"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "MongoDB", "Prisma", "AWS", "Docker", "Framer Motion",
]

const certifications = [
  {
    name: "Oracle Cloud Infrastructure Certified Developer Professional",
    issuer: "Oracle",
    date: "2025"
  },
]

export function About() {
  return (
    <Section id="about" className="bg-secondary/30">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Narrative Column */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="flex flex-col gap-6"
        >
           <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
            About Me
           </h2>
           <div className="prose prose-zinc dark:prose-invert max-w-none text-lg text-muted-foreground">
             <p>
               I'm a passionate Full-Stack Developer with a knack for building robust, scalable applications. My journey started with a curiosity for how things work on the web, which quickly turned into a career obsession with performance, user experience, and clean code.
             </p>
             <p>
               I specialize in the modern JavaScript stack, primarily React and Next.js, but I'm always exploring new technologies. I believe that good design is as important as good code, which is why I focus heavily on the intersection of design engineering and backend logic.
             </p>
             <p>
               When I'm not coding, you can find me exploring new coffee shops, reading about system architecture, or contributing to open-source projects.
             </p>
           </div>
        </motion.div>

        {/* Sidebar Column: Skills & Certs */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="flex flex-col gap-8"
        >
          {/* Skills */}
          <div className="flex flex-col gap-4">
             <h3 className="text-xl font-semibold">Tech Stack</h3>
             <div className="flex flex-wrap gap-2">
               {skills.map((skill) => (
                 <span 
                   key={skill}
                   className="inline-flex items-center rounded-md border border-input bg-background/50 px-3 py-1 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                 >
                   {skill}
                 </span>
               ))}
             </div>
          </div>

          {/* Certifications Card */}
          <Card className="bg-background/40 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
               {certifications.map((cert) => (
                 <div key={cert.name} className="flex items-start justify-between border-b border-border/40 pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium leading-none">{cert.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{cert.date}</span>
                 </div>
               ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
