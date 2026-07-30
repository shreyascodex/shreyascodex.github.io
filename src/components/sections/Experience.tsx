import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { experience } from '@/data/portfolio';
import { BookOpen } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <Container>
        <SectionTitle
          title="Learning Journey"
          subtitle="My path in software development — honest milestones, not employment history."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-[19px] top-1.5 w-[25px] h-[25px] rounded-full bg-background border-2 border-accent flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap px-3 py-1 bg-secondary rounded-full inline-block w-fit mt-2 sm:mt-0">
                    {item.period}
                  </span>
                </div>

                <h4 className="text-lg font-medium text-accent mb-4 flex items-center gap-2">
                  <BookOpen size={16} />
                  {item.company}
                </h4>

                <ul className="space-y-3">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex gap-3">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
