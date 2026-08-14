import React from 'react';
import { Container } from '@/components/ui/Container';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              Shreyas<span className="text-accent"> </span>Ghimire
            </span>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Shreyas Ghimire. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a href={personalInfo.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="X / Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={20} />
            </a>
            <a href={`mailto:${personalInfo.social.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={handleScrollTop}
            className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
