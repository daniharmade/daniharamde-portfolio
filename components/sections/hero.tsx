'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

import { Download, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import Particles from '@/components/particles';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/daniharmade' },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/daniharmade',
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background to-background/50"
    >
      <Particles className="absolute inset-0" />
      <div className="container px-4 mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-4xl md:text-6xl font-bold">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400 leading-tight">
              Haloo, I'm{' '}
              <span className="text-primary-orange">Dani</span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Information System student with knowledge in PHP, JavaScript, Kotlin, Python, Jetpack Compose, Node.js, Flask and Laravel. Enthusiastic about pursuing a career as a <span className="text-primary-orange font-semibold">Software Engineer</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 resume-btn"
              onClick={() =>
                window.open('/cv-dani-harmade.pdf', '_blank')
              }
            >
              <Download className="mr-2 h-4 w-4" />
              Curriculum Vitae (CV)
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-beam group hover:text-orange-600 transition-colors"
            >
              <a href="#contact">
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 mt-8"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary-orange transform hover:scale-110 transition-all"
                  aria-label={social.name}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
