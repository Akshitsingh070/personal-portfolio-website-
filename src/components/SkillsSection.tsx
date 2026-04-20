import { motion } from "framer-motion";

import { skillsCategories as categories } from "@/data/portfolio";

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16 text-sm">
          Technologies and tools I work with.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15, duration: 0.5 }}
          >
            <h3 className="font-heading font-semibold text-primary mb-4 text-sm tracking-widest uppercase">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="glass-card rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:glow-border transition-shadow duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
