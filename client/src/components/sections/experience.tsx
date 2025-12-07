"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Calendar, Trophy, ArrowRight, Briefcase, ExternalLink } from "lucide-react"

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  achievements: string[];
  skills: string[];
  companyUrl?: string;
}

const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Unimad",
    location: "London, UK · Remote",
    type: "Internship",
    period: "Oct 2025 - Present",
    achievements: [
      "Contributing to the development of scalable web applications using Next.js and Node.js.",
      "Optimizing frontend performance, reducing initial load times by 20%.",
      "Collaborating with the design team to implement pixel-perfect, responsive UI components.",
      "Participating in code reviews and agile sprints to ensure high code quality."
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"],
    companyUrl: "https://unimad.ai"
  },
  {
    role: "Design Engineer Intern",
    company: "Metrograsp Technology",
    location: "Bengaluru, India · Hybrid",
    type: "Internship",
    period: "Nov 2024 - Jun 2025",
    achievements: [
      "Worked on product design and engineering initiatives for industrial automation solutions.",
      "Created detailed 3D models and technical drawings using CAD software.",
      "Collaborated with cross-functional teams to prototype and test new product features.",
      "Ensured compliance with industry safety standards and quality protocols."
    ],
    skills: ["CAD/CAM", "Product Design", "Prototyping", "SolidWorks", "Technical Documentation"],
    companyUrl: "https://metrograsp.in"
  }
]

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <Section id="experience" className="bg-secondary/20 relative overflow-hidden">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto px-4 relative" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 z-10"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">Work Experience</h2>
        </motion.div>
        
        <div className="relative">
           {/* Timeline Line Container */}
           <div className="hidden md:flex flex-col items-center absolute left-[19px] top-4 bottom-0 w-4 z-0">
              <div className="w-0.5 h-full bg-border/40 relative">
                 <motion.div 
                   style={{ scaleY, originY: 0 }}
                   className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-transparent" 
                 />
              </div>
           </div>

           {/* Experience Items */}
           <div className="flex flex-col gap-12 w-full">
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-[50px_1fr] gap-4"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center pt-2 relative z-10">
                   <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shadow-sm group-hover:border-primary transition-colors">
                      <Briefcase className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                   </div>
                </div>

                {/* Card */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground/90 group-hover:text-primary transition-colors duration-300">{job.role}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center gap-1.5">
                            <Building2 className="h-4 w-4 opacity-70" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 opacity-70" />
                            <span>{job.location}</span>
                          </div>
                          <Badge variant="secondary" className="bg-secondary/80 text-secondary-foreground hover:bg-secondary border-0 transition-colors">
                            {job.type}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full text-sm font-medium border border-primary/10 whitespace-nowrap self-start">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3 text-foreground/90 font-semibold">
                        <Trophy className="h-4 w-4 text-amber-500" />
                        <span>Key Achievements</span>
                      </div>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                            <ArrowRight className="h-4 w-4 text-primary/60 shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/40">
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline" 
                            className="bg-primary/5 hover:bg-primary/10 border-primary/10 text-primary hover:text-primary transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {job.companyUrl && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-muted-foreground hover:text-primary shrink-0 group/btn"
                          asChild
                        >
                          <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                            <span>Visit Company</span>
                            <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
           </div>
        </div>
      </div>
    </Section>
  )
}
