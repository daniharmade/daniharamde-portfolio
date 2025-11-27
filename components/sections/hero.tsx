'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Github, Linkedin, Terminal } from 'lucide-react';
import Particles from '@/components/particles';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/daniharmade' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/daniharmade' },
];

export default function Hero() {
  // Animation Config
  const glowColor = 'rgb(255, 87, 34)';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] py-20"
    >
      <div className="absolute inset-0 opacity-40 z-0">
        <Particles className="absolute inset-0" quantity={50} staticity={50} color={glowColor} />
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[40vh] z-0 opacity-30 pointer-events-none"
        style={{
          background: `linear-gradient(to top, rgba(255,87,34,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,87,34,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)',
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(255,87,34)]/10 rounded-full blur-[120px] z-0" />

      <div className="container relative px-4 mx-auto z-10">

        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="mb-6 p-3 rounded-full border border-[rgb(255,87,34)]/30 bg-[rgb(255,87,34)]/5 backdrop-blur-md"
          >
            <Terminal className="w-6 h-6 text-[rgb(255,87,34)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 max-w-4xl"
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="text-white drop-shadow-lg">Haloo, I'm</span> <br className="md:hidden" />
              <span
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[rgb(255,87,34)] to-orange-500"
                style={{ filter: 'drop-shadow(0 0 20px rgba(255,87,34,0.4))' }}
              >
                Dani
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[rgb(255,87,34)] rounded-full opacity-70 shadow-[0_0_10px_rgb(255,87,34)]" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans"
            >
              <span className="font-mono text-[rgb(255,87,34)]">&lt;System&gt;</span> Information Systems student transforming ideas into
              <span className="text-white font-medium"> Web & Android</span> reality.
              Passionate about <span className="text-white border-b border-dashed border-gray-600 pb-0.5">clean code</span> and
              innovative solutions.
              <span className="font-mono text-[rgb(255,87,34)]"> &lt;/System&gt;</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 justify-center pt-6"
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-[rgb(255,87,34)] hover:bg-orange-700 text-white border-0 font-bold tracking-wide group"
                onClick={() => window.open('/pdf/cv-dani-harmade.pdf', '_blank')}
              >
                <span className="relative z-10 flex items-center">
                  <Download className="mr-2 h-4 w-4" /> Curriculum Vitae
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[rgb(255,87,34)]/50 text-white hover:bg-[rgb(255,87,34)]/10 hover:text-[rgb(255,87,34)] backdrop-blur-sm transition-all duration-300 group"
              >
                <a href="#contact" className="flex items-center">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center gap-6 mt-12"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-[rgb(255,87,34)] hover:border-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)]/10 transition-all duration-300 group"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-[rgb(255,87,34)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgb(255,87,34)]" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}