"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, GraduationCap, Users, Award, ExternalLink } from "lucide-react"
import { Section } from "@/components/ui/section"
import Image from "next/image"
import { SiOracle } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


const certifications = [
  {
    name: "Oracle Cloud Infrastructure Certified Developer Professional",
    issuer: "Oracle",
    date: "22 Oct 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C13A1F2C96F3410EDBFDAD631873C06B6A426F55219304CF10E0FC5B4A312AB8"
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
           <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground mb-4 relative inline-block mb-2">
               My Journey
               <span className="absolute -bottom-4 left-0 h-1 w-12 bg-primary rounded-full"></span>
              </h2>
           </div>
           
           <div className="prose prose-zinc dark:prose-invert max-w-none text-muted-foreground space-y-4">
             <p className="text-lg">
               I'm a final year Computer Science and Engineering student with 18+ months of experience in Full Stack Development. My expertise spans the entire development lifecycle, from conceptual design to deployment and maintenance.
             </p>
             <p className="text-md">
               My journey began with a curiosity about how digital products work, which evolved into a deep passion for creating meaningful user experiences. I specialize in React, Node.js, and cloud technologies, always staying current with industry best practices.
             </p>
             <p className="text-md">
               Beyond coding, I'm committed to continuous learning, open-source contribution, and mentoring fellow developers. I'm also a huge rock music fan and a part-time musician.
             </p>
           </div>

           <div className="mt-6">
              <h3 className="text-xl font-bold text-foreground mb-4">What I Bring</h3>
              <ul className="grid gap-3">
                 {[
                   "Full-stack development expertise",
                   "Modern UI/UX design principles",
                   "Agile development methodology",
                   "Performance optimization",
                   "Cloud deployment & DevOps",
                   "Team collaboration & open-source contribution"
                 ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                       <div className="flex items-center justify-center p-0.5 rounded-full border border-primary/30 text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                       </div>
                       {item}
                    </li>
                 ))}
              </ul>
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


          {/* Education Card */}
          <Card className="bg-background/40 backdrop-blur-sm border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center border border-border/50 shrink-0 mt-1 overflow-hidden relative">
                     {/* Logo */}
                     <Image 
                        src="/assets/hkbk-icon.png" 
                        alt="HKBK College of Engineering" 
                        fill 
                        className="object-cover"
                     />
                  </div>
                  <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                            <h4 className="font-semibold text-foreground">HKBK College of Engineering</h4>
                            <p className="text-sm text-muted-foreground">Bengaluru, India</p>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono whitespace-nowrap text-right">Aug 2022 - Present</span>
                      </div>
                      
                      <div className="mb-4">
                         <p className="text-sm font-medium text-foreground/90">Bachelor in Engineering (B.E.)</p>
                         <p className="text-sm text-muted-foreground">Computer Science & Engineering</p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">Relevant Coursework</p>
                        <div className="flex flex-wrap gap-1.5">
                            {[
                              "Data Structures & Algorithms", 
                              "Theory of Computation & Automata", 
                              "Operating Systems", 
                              "Computer Networks", 
                              "Object-Oriented Programming", 
                              "Database Management Systems"
                            ].map((course) => (
                               <span key={course} className="inline-flex items-center rounded-sm border border-border/50 bg-secondary/50 px-2 py-0.5 text-xs text-secondary-foreground hover:bg-secondary transition-colors cursor-default">
                                  {course}
                               </span>
                            ))}
                        </div>
                      </div>
                      

                  </div>
               </div>
            </CardContent>
          </Card>

          {/* Community Card */}
          <Card className="bg-background/40 backdrop-blur-sm border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
               <div className="flex items-center gap-4 border-b border-border/40 pb-4 last:border-0 last:pb-0">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-border/50 shrink-0 overflow-hidden relative">
                     <Image 
                        src="/assets/hkbk-glug-icon.svg" 
                        alt="HKBK GLUG" 
                        fill 
                        className="object-cover" 
                     />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                       <p className="font-medium leading-none">HKBK GLUG</p>
                       <span className="text-xs text-muted-foreground font-mono">Jul 2023 - Present</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Core Team Member</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 border-b border-border/40 pb-4 last:border-0 last:pb-0">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center border border-border/50 shrink-0 overflow-hidden relative">
                     <Image 
                        src="/assets/tezbytes-icon.png" 
                        alt="TezBytes" 
                        fill 
                        className="object-cover" 
                     />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                       <p className="font-medium leading-none">TezBytes</p>
                       <span className="text-xs text-muted-foreground font-mono">Jun 2025 - Present</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Contributor</p>
                  </div>
               </div>
            </CardContent>
          </Card>

          {/* Certifications Card */}
          <Card className="bg-background/40 backdrop-blur-sm border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
               {certifications.map((cert) => (
                 <div key={cert.name} className="flex items-center gap-4 border-b border-border/40 pb-4 last:border-0 last:pb-0">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center border border-border/50 shrink-0 overflow-hidden">
                       {cert.issuer === "Oracle" ? (
                         <SiOracle className="h-5 w-5 text-[#F80000]" />
                       ) : (
                         <span className="text-xs font-bold text-muted-foreground">IMG</span>
                       )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                         <p className="font-medium leading-snug pr-2">{cert.name}</p>
                         <span className="text-xs text-muted-foreground font-mono whitespace-nowrap shrink-0 mt-0.5">{cert.date}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <p>{cert.issuer}</p>
                          {cert.link && (
                            <Button variant="outline" size="sm" className="h-6 text-[10px] px-2" asChild>
                               <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                                  Verify Credential
                                  <ExternalLink className="h-3 w-3" />
                               </a>
                            </Button>
                          )}
                      </div>
                    </div>
                 </div>
               ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
