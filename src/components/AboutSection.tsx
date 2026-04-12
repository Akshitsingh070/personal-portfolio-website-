import { motion } from "framer-motion";
import { GraduationCap, Trophy, Rocket } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Education", desc: "B.Tech – Computer Science Engineering (2024–2028) at IILM University, Gurgaon. Current CGPA: 6.55." },
  { icon: Trophy, title: "Achievements", desc: "Winner of 2 major hackathons and 1 minor hackathon. Finalist in 9+ hackathons." },
  { icon: Rocket, title: "Projects", desc: "Actively developing real-world projects, from traffic optimization systems to AI-powered content platforms." },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16 text-sm">
          A glimpse into who I am and what drives me.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card rounded-xl p-6 hover:glow-border transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
