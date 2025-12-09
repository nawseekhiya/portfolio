"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import Image from "next/image"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false)

  // Disable body scroll when modal is open
  React.useEffect(() => {
    if (isAvatarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isAvatarOpen])

  return (
    <Section className="flex min-h-[calc(100vh-3.5rem)] flex-col justify-center">
      {/* Instagram-style Avatar Lightbox Modal */}
      <AnimatePresence>
        {isAvatarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsAvatarOpen(false)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsAvatarOpen(false)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Large Circular Avatar */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow Ring */}
              <div className="absolute -inset-2 bg-primary/40 rounded-full blur-2xl" />
              
              {/* Animated Ring */}
              <div className="absolute -inset-[3px] rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--primary)_50%,transparent_100%)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* Avatar */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-white/20 bg-background overflow-hidden">
                <Image 
                  src="/assets/hero-avatar.svg" 
                  alt="Abhishek Mohanty" 
                  fill 
                  className="object-contain object-top translate-y-4"
                  sizes="320px"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid lg:grid-cols-2 gap-12 px-4 items-center">
        <div className="flex flex-col gap-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          {/* Enhanced Mobile Avatar with Animated Ring */}
          <div 
            className="lg:hidden relative group cursor-pointer"
            onClick={() => setIsAvatarOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="View profile picture"
            onKeyDown={(e) => e.key === 'Enter' && setIsAvatarOpen(true)}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-125 group-hover:bg-primary/50 transition-all duration-500" />
            
            {/* Animated Gradient Ring */}
            <div className="absolute -inset-[2px] rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--primary)_50%,transparent_100%)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Avatar Container */}
            <div className="relative w-14 h-14 rounded-full border border-white/10 bg-background overflow-hidden group-active:scale-95 transition-transform">
              <Image 
                src="/assets/hero-avatar.svg" 
                alt="Abhishek Mohanty" 
                fill 
                className="object-contain object-top translate-y-1"
                sizes="56px"
              />
            </div>
            
            {/* Online Status Indicator */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
            </div>
          </div>
          
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building digital <br className="hidden sm:inline" />
            <span className="text-primary">experiences</span> that matter.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           <p className="max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
            I'm a full-stack developer focused on crafting clean, accessible, and high-performance web applications.
            Transforming complex problems into elegant concepts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <Button size="lg" className="h-12 px-6 text-base w-full sm:w-auto" asChild>
            <a href="#projects">
              View Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-6 text-base w-full sm:w-auto" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <div className="flex gap-2 justify-center sm:justify-start sm:ml-4">
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
      
      {/* Right Column: Hero Avatar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:flex justify-center items-center relative"
      >
         {/* Glow Effect */}
         <div className="relative group">
            {/* Ambient Mesh Glow (Background) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] -z-10 opacity-60 transition-all duration-700 group-hover:opacity-100">
                <motion.div
                   animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                   transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                   style={{ willChange: "transform" }}
                   className="absolute top-0 left-0 w-3/4 h-3/4 bg-primary/40 rounded-full blur-[80px]"
                />
                <motion.div
                   animate={shouldReduceMotion ? {} : { scale: [1.1, 0.9, 1.1], rotate: [0, -10, 0] }}
                   transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                   style={{ willChange: "transform" }}
                   className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-blue-600/30 rounded-full blur-[80px]"
                />
            </div>
            
            {/* Animated Conic Rim (Middle Layer) */}
            <div className="absolute -inset-[2px] rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,var(--primary)_50%,#0000_100%)]"
                  animate={shouldReduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ willChange: "transform" }}
                />
            </div>

            {/* Avatar Container (Front) */}
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-white/10 bg-background/80 backdrop-blur-sm overflow-hidden z-20">
              <Image 
                src="/assets/hero-avatar.svg" 
                alt="Abhishek Mohanty" 
                fill 
                className="object-contain object-top translate-y-6 relative z-10"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
         </div>
      </motion.div>
      </div>
    </Section>
  )
}
