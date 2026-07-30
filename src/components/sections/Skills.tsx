import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { skills } from '@/data/portfolio';
import { Code2, Server, Wrench, Languages, Database, HeartHandshake, Terminal } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend":    <Code2        className="text-accent" size={24} />,
  "Backend":     <Server       className="text-accent" size={24} />,
  "Programming": <Terminal     className="text-accent" size={24} />,
  "Tools":       <Wrench       className="text-accent" size={24} />,
  "Languages":   <Languages    className="text-accent" size={24} />,
  "Databases":   <Database     className="text-accent" size={24} />,
  "Soft Skills": <HeartHandshake className="text-accent" size={24} />,
};

export function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 bg-secondary/50">
      <Container>
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I know and am actively learning."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category} variants={itemVariants}>
              <Card className="h-full p-6 bg-card flex flex-col hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary rounded-lg">
                    {categoryIcons[category]}
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>

                <div className="space-y-4 mt-auto">
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1 font-medium text-foreground">
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-muted-foreground">{skill.level}%</span>
                          )}
                        </div>
                        {skill.level && (
                          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-accent rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
