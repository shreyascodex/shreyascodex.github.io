import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useTypewriter } from '@/hooks/useTypewriter';

export function Hero() {
  const typedRole = useTypewriter(personalInfo.roles, 80, 40, 2000);

  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-0 top-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <Container className="relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

        <div className="flex-1 space-y-8 text-center md:text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Hi, I'm {personalInfo.name.split(' ')[0]}<span className="text-accent">.</span>
            </h1>

            <div className="h-10 sm:h-12 flex items-center justify-center md:justify-start">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground">
                I'm a <span className="text-foreground">{typedRole}</span>
                <span className="animate-pulse text-accent">|</span>
              </span>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 font-light">
              {personalInfo.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <Button size="lg" onClick={(e) => handleScrollTo(e, 'projects')}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={(e) => handleScrollTo(e, 'contact')}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center md:justify-start gap-5 pt-4"
          >
            <SocialLink href={personalInfo.social.github} icon={<Github />} ariaLabel="GitHub" />
            <SocialLink href={personalInfo.social.linkedin} icon={<Linkedin />} ariaLabel="LinkedIn" />
            <SocialLink href={personalInfo.social.twitter} icon={<Twitter />} ariaLabel="X / Twitter" />
            <SocialLink href={`mailto:${personalInfo.social.email}`} icon={<Mail />} ariaLabel="Email" />
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border border-border" />
            <div className="absolute inset-4 rounded-full border border-border/50" />
            <div className="absolute inset-8 rounded-full bg-secondary overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-tr from-accent/20 to-primary/10 flex items-center justify-center text-8xl text-accent/50 font-bold group-hover:scale-110 transition-transform duration-300">
                {personalInfo.name.charAt(0)}
              </div>
            </div>

            {/* Decorative orbit dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-accent/20"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent" />
            </motion.div>
          </div>
        </motion.div>

      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

    </section>
  );
}

function SocialLink({ href, icon, ariaLabel }: { href: string; icon: React.ReactNode; ariaLabel: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
      aria-label={ariaLabel}
      className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all hover:scale-110"
    >
      {React.cloneElement(icon as React.ReactElement, { size: 22 })}
    </a>
  );
}
