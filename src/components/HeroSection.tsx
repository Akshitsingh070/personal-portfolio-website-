import { motion } from "framer-motion";
import { ArrowDown, Github, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Subtle grid */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "linear-gradient(hsl(24 95% 53%) 1px, transparent 1px), linear-gradient(90deg, hsl(24 95% 53%) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
          Akshit <span className="text-gradient">Singh</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-3">
          Computer Science Student | Aspiring Software Developer
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-sm leading-relaxed">
          Motivated Computer Science student with hands-on experience in full-stack development, AI-based automation, and system design. Passionate about building scalable applications and solving real-world problems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full font-heading">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full font-heading border-primary/40 text-primary hover:bg-primary/10">
            <a href="#resume"><FileDown className="mr-2 h-4 w-4" />Download Resume</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full font-heading border-border text-foreground hover:bg-secondary">
            <a href="https://github.com/Akshitsingh070" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />GitHub
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
