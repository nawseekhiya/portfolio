"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log(data)
      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (error) {
      console.error("Failed to submit form", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
           <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground mb-4">
              Get in Touch
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities and ideas.
           </p>
        </motion.div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-8 md:gap-12 items-start">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full gap-8"
          >
            {/* Top Group: Contact Details & Socials */}
            <div className="space-y-8">
              <div className="space-y-4">
                 {/* Email Card */}
                 <Card className="bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden hover:bg-primary/5 transition-colors group">
                    <a href="mailto:araj80317@gmail.com" className="block p-4">
                       <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                             <Mail className="h-5 w-5" />
                          </div>
                          <div>
                             <h3 className="font-semibold text-foreground">Email</h3>
                             <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors block mb-0.5">
                                araj80317@gmail.com
                             </span>
                             <p className="text-xs text-muted-foreground/70">Send me an email anytime</p>
                          </div>
                       </div>
                    </a>
                 </Card>

                 {/* Location Card */}
                 <Card className="bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-4 flex items-start gap-4">
                       <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <MapPin className="h-5 w-5" />
                       </div>
                       <div>
                          <h3 className="font-semibold text-foreground">Location</h3>
                          <p className="text-sm text-muted-foreground mb-0.5">Bengaluru, India</p>
                          <p className="text-xs text-muted-foreground/70">Open to remote opportunities</p>
                       </div>
                    </CardContent>
                 </Card>
              </div>

               {/* Follow Me */}
               <div>
                  <h3 className="font-bold text-foreground mb-4">Follow Me</h3>
                  <div className="flex gap-3">
                     <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl bg-card border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all" asChild>
                        <a href="https://github.com/nawseekhiya" target="_blank" rel="noopener noreferrer">
                           <Github className="h-5 w-5" />
                           <span className="sr-only">GitHub</span>
                        </a>
                     </Button>
                     <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl bg-card border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all" asChild>
                        <a href="https://www.linkedin.com/in/iamabhishekmohanty/" target="_blank" rel="noopener noreferrer">
                           <Linkedin className="h-5 w-5" />
                           <span className="sr-only">LinkedIn</span>
                        </a>
                     </Button>
                  </div>
               </div>
            </div>

            {/* Bottom Group: Status */}
            <div>
                {/* Status Card */}
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-primary-foreground/90 backdrop-blur-sm">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="relative flex h-3 w-3">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="font-semibold text-foreground text-sm">Available for work</span>
                   </div>
                   <p className="text-sm text-muted-foreground">
                      I&apos;m currently accepting new projects and would love to hear about yours.
                   </p>
                </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <Card className="border-border/50 shadow-lg bg-card/80 backdrop-blur-xl">
                <CardContent className="p-6 md:p-8">
                   <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground">Send me a message</h3>
                   </div>
                   
                   <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                     <div className="grid sm:grid-cols-2 gap-4">
                       <div className="space-y-2">
                         <Label htmlFor="name" className="mb-2 inline-block">Full Name <span className="text-destructive">*</span></Label>
                         <Input
                           id="name"
                           placeholder="Your full name"
                           {...register("name")}
                           disabled={isSubmitting}
                           className="bg-background/50"
                         />
                         {errors.name && (
                           <p className="text-xs text-destructive">{errors.name.message}</p>
                         )}
                       </div>
                       <div className="space-y-2">
                         <Label htmlFor="email" className="mb-2 inline-block">Email Address <span className="text-destructive">*</span></Label>
                         <Input
                           id="email"
                           type="email"
                           placeholder="your.email@example.com"
                           {...register("email")}
                           disabled={isSubmitting}
                           className="bg-background/50"
                         />
                         {errors.email && (
                           <p className="text-xs text-destructive">{errors.email.message}</p>
                         )}
                       </div>
                     </div>

                     <div className="space-y-2">
                       <Label htmlFor="subject" className="mb-2 inline-block">Subject</Label>
                       <Input
                         id="subject"
                         placeholder="What's this about?"
                         {...register("subject")}
                         disabled={isSubmitting}
                         className="bg-background/50"
                       />
                       {errors.subject && (
                         <p className="text-xs text-destructive">{errors.subject.message}</p>
                       )}
                     </div>

                     <div className="space-y-2">
                       <Label htmlFor="message" className="mb-2 inline-block">Message <span className="text-destructive">*</span></Label>
                       <Textarea
                         id="message"
                         placeholder="Tell me about your project, ideas, or just say hello..."
                         rows={6}
                         {...register("message")}
                         disabled={isSubmitting}
                         className="bg-background/50 resize-none"
                       />
                       {errors.message && (
                         <p className="text-xs text-destructive">{errors.message.message}</p>
                       )}
                     </div>

                     <Button
                       type="submit"
                       className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
                       disabled={isSubmitting}
                     >
                       {isSubmitting ? (
                         <>
                           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                           Sending...
                         </>
                       ) : isSuccess ? (
                         <>
                           <CheckCircle2 className="mr-2 h-5 w-5" />
                           Sent Successfully
                         </>
                       ) : (
                         <>
                           Send Message
                           <Send className="ml-2 h-4 w-4" />
                         </>
                       )}
                     </Button>

                     <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-muted-foreground/80">
                        <div className="flex items-center gap-1.5">
                           <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                           <span>Usually responds within 24 hours</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                           <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                           <span>Free consultation available</span>
                        </div>
                     </div>
                   </form>
                </CardContent>
             </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
