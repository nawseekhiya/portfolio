"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink, Calendar } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";

interface Project {
  title: string;
  description: string;
  date: string;
  tech: string[];
  github?: string;
  demo?: string;
  imageColor: string; // Placeholder for thumbnail gradient
  status: string;
}

const items: Project[] = [
  {
    title: "AquaAware India",
    description: "A comprehensive dashboard that monitors water quality data across key metropolitan locations in India. Visualizes data using Recharts and provides actionable insights for sustainability managers.",
    date: "Jul 2025",
    tech: ["Next.js", "TypeScript", "Express.js", "Tailwind CSS", "Recharts", "Supabase"],
    github: "https://github.com/nawseekhiya/aqua-aware",
    demo: "https://aqua-aware-abhishek.vercel.app",
    imageColor: "from-green-500/20 to-emerald-500/20",
    status: "v1.0.0",
  },
  {
    title: "HKBK GLUG Website",
    description: "A responsive website for the HKBK GLUG chapter, featuring a modern design and smooth animations.",
    date: "Oct 2024",
    tech: ["Next.js", "TypeScript", "Express.js", "Tailwind CSS", "MongoDB", "Docker"],
    github: "https://github.com/nawseekhiya/hkbk-glug-site",
    demo: "https://hkbk.glugs.fsmk.org/",
    imageColor: "from-blue-500/20 to-indigo-500/20",
    status: "v2.1.0",
  },
  {
    title: "Fake News Detector",
    description: "A Machine Learning–powered web application that detects whether a news article is real or fake. Built using Python, Scikit-learn, and Streamlit, the app takes the title and content of a news piece, processes it using NLP, and returns the probability of it being fake or real.",
    date: "Aug 2024",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Jupyter"],
    github: "https://github.com/nawseekhiya/fake-news-detector",
    imageColor: "from-purple-500/20 to-pink-500/20",
    status: "Stable",
  },
  {
    title: "AI Judge",
    description: "Web app where two sides upload arguments or documents and an AI judge (Gemini API) issues a verdict.",
    date: "Nov 2025",
    tech: ["Next.js", "TypeScript", "Google Gemini", "Node.js", "Express.js", "Tailwind CSS"],
    github: "https://github.com/nawseekhiya/ai-judge",
    imageColor: "from-orange-500/20 to-red-500/20",
    status: "In Development",
  },
];

const featuredItems = items.slice(0, 2);

export function Projects() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Section id="projects">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">Featured Work</h2>
        <Button onClick={() => setShowModal(true)} variant="outline">
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {featuredItems.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        className="max-w-6xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {items.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Modal>
    </Section>
  );
}

const techMap: Record<string, string> = {
  "Next.js": "nextdotjs",
  "React": "react",
  "Express.js": "express",
  "TypeScript": "typescript",
  "Tailwind CSS": "tailwindcss",
  "Node.js": "nodedotjs",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Prisma": "prisma",
  "Docker": "docker",
  "Redis": "redis",
  "Google Gemini": "googlegemini",
  "OpenAI API": "openai",
  "Recharts": "chartdotjs", 
  "Supabase": "supabase",
  "Storybook": "storybook",
  "Python": "python",
  "Jupyter": "jupyter",
  "Pandas": "pandas",
  "Scikit-learn": "scikitlearn",
  "Streamlit": "streamlit",
  "NPM": "npm",
};

// Helper for Status Colors
const getStatusColor = (status: string) => {
  if (status.startsWith("v") || status === "Stable") {
    return "bg-emerald-100/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20 dark:text-emerald-400";
  }
  if (["In Progress", "In Development", "Beta"].includes(status)) {
    return "bg-amber-100/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20 dark:text-amber-400";
  }
  if (["Not Maintained", "Deprecated", "Archived"].includes(status)) {
    return "bg-rose-100/10 text-rose-600 border-rose-500/20 hover:bg-rose-500/20 dark:text-rose-400";
  }
  return "bg-secondary/50 text-muted-foreground border-border/50";
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="relative overflow-hidden flex flex-col h-full bg-card/40 dark:bg-card/60 backdrop-blur-sm hover:bg-card/60 hover:shadow-xl transition-all duration-300 border-white/10 dark:border-white/10 group">


      {/* Thumbnail Placeholder */}
      <div className={`h-48 w-full bg-gradient-to-br ${project.imageColor} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`} />

      <CardHeader className="p-6 pb-2">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
             <div className="mb-2">
                <Badge 
                  className={`backdrop-blur-md shadow-sm border ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </Badge>
             </div>
             <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
             <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="mr-1 h-3 w-3" /> {project.date}
             </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-2 flex-grow">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-center -space-x-2 py-1 pl-1">
          {project.tech.map((t, i) => {
             const slug = techMap[t] || "javascript"; 
             return (
              <motion.div 
                key={t}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ 
                  scale: 1.25, 
                  zIndex: 20,
                  transition: { type: "spring", stiffness: 300, damping: 10 } 
                }}
                className="relative inline-flex items-center justify-center w-8 h-8 rounded-full border border-background bg-card shadow-sm z-10 cursor-help"
                title={t}
              >
                <img 
                  src={`https://cdn.simpleicons.org/${slug}/2F54EB`} 
                  alt={t} 
                  className="w-4 h-4 dark:hidden" 
                />
                 <img 
                  src={`https://cdn.simpleicons.org/${slug}/597EF7`} 
                  alt={t} 
                  className="w-4 h-4 hidden dark:block" 
                />
              </motion.div>
             )
          })}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Code"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.demo && (
              <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Live Demo"
              >
              <ExternalLink className="h-5 w-5" />
              </a>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
