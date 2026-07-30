import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/portfolio';
import {
  Monitor,
  Layout,
  Code,
  Palette,
  Bug,
  Zap,
  User,
  Wrench,
  Check,
} from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Monitor:  <Monitor  size={28} />,
  Layout:   <Layout   size={28} />,
  Code:     <Code     size={28} />,
  Palette:  <Palette  size={28} />,
  Bug:      <Bug      size={28} />,
  Zap:      <Zap      size={28} />,
  User:     <User     size={28} />,
  Wrench:   <Wrench   size={28} />,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <Container>
        <SectionTitle
          title="Services"
          subtitle="Ways I can help bring your ideas to life."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className="relative h-full"
            >
              {service.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Popular
                  </span>
                </div>
              )}

              <Card
                className={`h-full flex flex-col p-6 ${
                  service.popular
                    ? 'border-accent shadow-lg shadow-accent/10 relative overflow-hidden'
                    : 'border-border'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                )}

                <div className={`mb-5 p-3 inline-flex rounded-xl w-fit ${
                  service.popular ? 'bg-accent/10 text-accent' : 'bg-secondary text-foreground'
                }`}>
                  {icons[service.icon]}
                </div>

                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex-1 space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
                        service.popular ? 'bg-accent/20 text-accent' : 'bg-secondary text-muted-foreground'
                      }`}>
                        <Check size={12} />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={service.popular ? 'primary' : 'outline'}
                  className="w-full mt-auto"
                  size="sm"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                  }}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
