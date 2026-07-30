import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import { personalInfo } from "@/data/portfolio";

import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        "service_i7c9fdb",
        "template_881zarx",
        form.current,
        "aBZJyImwvnb3hx5iL"
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              title="Let's build something great."
              subtitle="Have a project idea or want to collaborate? Send me a message and I'll get back to you."
              className="mb-8"
            />

            <div className="space-y-6 mt-10">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Email</p>
                  <a
                    href={`mailto:${personalInfo.social.email}`}
                    className="font-semibold hover:text-accent transition-colors"
                  >
                    {personalInfo.social.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Location</p>
                  <p className="font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-10 pt-10 border-t border-border">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-secondary rounded-xl hover:bg-accent hover:text-white transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-secondary rounded-xl hover:bg-accent hover:text-white transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="p-3 bg-secondary rounded-xl hover:bg-accent hover:text-white transition-all hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a message</h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    required
                    placeholder="Your Name"
                    className="input-style"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="input-style"
                  />
                </div>

                <input
                  name="subject"
                  required
                  placeholder="Subject"
                  className="input-style"
                />

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="input-style resize-none"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </Button>

                {/* STATUS */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-500 text-sm mt-4">
                    <CheckCircle size={18} />
                    Message sent successfully!
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-4">
                    <AlertCircle size={18} />
                    Failed to send message. Try again.
                  </div>
                )}
              </form>
            </Card>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
