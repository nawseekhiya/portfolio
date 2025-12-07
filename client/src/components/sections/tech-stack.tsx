"use client"

import React from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { LogoLoop } from "@/components/ui/logo-loop"
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiMongodb, SiPrisma, 
  SiAmazonwebservices, SiDocker, SiFramer, 
  SiFigma,
  SiVercel,
  SiSupabase,
  SiExpress,
  SiRedux,
  SiExpo,
  SiJavascript,
  SiPython,
  SiDjango,
  SiDart,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman
} from "react-icons/si"

const techLogos = [
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    {node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {node: <SiReact />, title: "React", href: "https://react.dev" },
    {node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
    {node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    {node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    {node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    {node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  { node: <SiExpo />, title: "Expo", href: "https://expo.dev" },
  { node: <SiDart />, title: "Dart", href: "https://dart.dev" },
  { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
  { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiGitlab />, title: "GitLab", href: "https://gitlab.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
]

export function TechStack() {
  return (
    <Section id="tech-stack" className="py-12 border-b border-border/40 bg-secondary/5">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className="flex flex-col gap-8"
      >
        <div className="text-center mb-4">
           <h2 className="text-2xl font-bold tracking-tight text-foreground/80">Technologies I Work With</h2>
        </div>
        
        <div className="w-full bg-background/50 border border-border/50 rounded-xl backdrop-blur-sm p-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <LogoLoop 
              logos={techLogos} 
              speed={50} 
              gap={60}
              logoHeight={48}
              pauseOnHover={true}
            />
        </div>
      </motion.div>
    </Section>
  )
}
