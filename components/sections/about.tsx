'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050505]">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgb(255,87,34)]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
        >
          
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-5 relative flex justify-center"
          >
            <div className="absolute w-72 h-72 md:w-80 md:h-80 border border-dashed border-[rgb(255,87,34)]/30 rounded-full animate-[spin_10s_linear_infinite]" />
            
            <div className="absolute w-64 h-64 md:w-[19rem] md:h-[19rem] rounded-full bg-gradient-to-b from-[rgb(255,87,34)]/20 to-transparent blur-md" />

            <div className="relative w-64 h-64 md:w-72 md:h-72 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(255,87,34)] to-purple-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-500 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#1a1a1a] bg-[#1a1a1a]">
                <Image
                  src="/dani.png"
                  alt="Dani Harmade"
                  fill
                  className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#0f0f0f] border border-[rgb(255,87,34)] px-4 py-1 rounded-full shadow-[0_0_15px_rgba(255,87,34,0.4)]">
                <span className="text-xs font-mono text-[rgb(255,87,34)] font-bold">
                  #OPENTOWORK
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,87,34)] to-orange-200 drop-shadow-[0_0_10px_rgba(255,87,34,0.5)]">Me</span>
              </h2>
            </div>

            <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:border-[rgb(255,87,34)]/30 transition-colors duration-300 group">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[rgb(255,87,34)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[rgb(255,87,34)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-gray-300 space-y-4 leading-relaxed font-sans">
                <p>
                  Hi! I'm <strong className="text-white">Dani Harmade</strong>, a 
                  <span className="text-[rgb(255,87,34)] mx-1 font-medium">7th-semester Information System student</span> 
                  passionate about bridging the gap between complex backend logic and immersive frontend experiences.
                </p>
                <p>
                  My journey involves hands-on experience as an <span className="text-white">Android & Full Stack Developer</span>. 
                  I have sharpened my skills through prestigious programs like <span className="text-white border-b border-dashed border-gray-500">Bangkit Academy (Distinction Graduate)</span> and <span className="text-white border-b border-dashed border-gray-500">DBS Foundation Coding Camp (Distinction Graduate)</span>.
                </p>
                <p>
                Beyond writing code, I focus on developing solutions that create real impact and streamline real-world processes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['PHP', 'JavaScript', 'Kotlin', 'Laravel', 'Hapi.js & React.js', 'Jetpack Compose'].map((tech, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center px-3 py-2 rounded border border-white/10 bg-white/5 text-sm text-gray-400 font-mono hover:text-[rgb(255,87,34)] hover:border-[rgb(255,87,34)]/50 hover:bg-[rgb(255,87,34)]/10 transition-all cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}