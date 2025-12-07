"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Modal({ isOpen, onClose, children, title, className }: ModalProps) {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm"
          />
          
          {/* Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className={cn(
                "relative w-full max-w-6xl max-h-[85vh] flex flex-col pointer-events-auto rounded-3xl border border-white/10 bg-background/100 backdrop-blur-3xl saturate-150 shadow-2xl outline-none overflow-hidden",
                className
              )}
            >
              {/* Floating Close Button - Modern & Minimal */}
              <div className="absolute top-4 right-4 z-50">
                 <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={onClose} 
                    className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-md hover:bg-destructive/10 hover:text-destructive transition-all duration-300 shadow-sm border border-black/5 dark:border-white/10"
                  >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* Header-less Content Area */}
              <div className="flex-1 overflow-y-auto p-8 pt-8 scroll-smooth">
                 {title && <h2 className="sr-only">{title}</h2>} {/* Accessible hidden title */}
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
