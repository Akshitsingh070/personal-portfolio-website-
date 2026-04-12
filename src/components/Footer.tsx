import { Github } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 Akshit Singh. Built with passion using Git + GitHub.</p>
      <a
        href="https://github.com/Akshitsingh070"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <Github className="h-4 w-4" />GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
