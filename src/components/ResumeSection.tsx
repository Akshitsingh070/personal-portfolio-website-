import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => (
  <section id="resume" className="py-24">
    <div className="container mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          My <span className="text-gradient">Resume</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-sm">
          Download my resume to learn more about my experience and qualifications.
        </p>
        <Button asChild size="lg" className="rounded-full font-heading px-8">
          <a href="/resume.pdf" download>
            <FileDown className="mr-2 h-5 w-5" />Download Resume PDF
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
