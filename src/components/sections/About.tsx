import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/card';
import { personalInfo } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="A glimpse into who I am and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.about}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My interest in web development started with curiosity about how websites are built.
              That curiosity led me to learn HTML, CSS, and JavaScript, and then progressively
              explore modern tools like React, TypeScript, and Tailwind CSS through hands-on projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of coding, I enjoy exploring new technologies, contributing to open-source
              projects, and sharing what I learn with others in the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <StatCard
              label="Years Learning"
              value={String(personalInfo.stats.yearsExperience)}
            />
            <StatCard
              label="Projects Built"
              value={String(personalInfo.stats.projectsShipped)}
            />
            <StatCard
              label="Technologies"
              value={String(personalInfo.stats.technologies)}
              className="col-span-2"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

function StatCard({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <Card className={`p-6 flex flex-col items-center justify-center text-center space-y-2 ${className}`}>
      <span className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
        {value}
      </span>
      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </Card>
  );
}
