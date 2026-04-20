import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import { projects } from "@/data/portfolio";

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16 text-sm">
          Real-world projects I've built to solve problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card rounded-xl p-6 flex flex-col hover:glow-border transition-shadow duration-300 group"
          >
            <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary to-primary/40 mb-6" />
            <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.stack.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
            <Button asChild variant="outline" size="sm" className="w-fit rounded-full border-primary/30 text-primary hover:bg-primary/10">
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-3.5 w-3.5" />View on GitHub
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
