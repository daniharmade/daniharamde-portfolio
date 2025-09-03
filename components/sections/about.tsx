'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative w-64 md:w-96 mx-auto">
              <div className="aspect-square relative rounded-full overflow-hidden shine-border">
                <Image
                  src="/dani.png"
                  alt="Foto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-orange/10 to-transparent rounded-full animate-pulse" />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-primary-orange">Me</span>
              </h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Hi! I'm{' '}
                  <span className="text-primary-orange font-semibold">
                    Dani Harmade <span> </span>
                  </span>
                  7th-semester Information System student with experience as an Android and Full Stack Developer. Selected for top programs like Bangkit Academy (Distinction Graduate, Mobile Development) and DBS Foundation Coding Camp. Certified as a BNSP Junior Web Developer. Skilled in PHP, JavaScript, Kotlin, Laravel, and Jetpack Compose.
                </p>
                <p>
                  I’ve built a digital lab assistant registration system and an AI-powered skin disease detection app. Active in tech communities such as Google Developer Students Club. I believe technology is a tool for real, sustainable impact.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
