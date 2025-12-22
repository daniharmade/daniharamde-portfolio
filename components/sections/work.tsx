'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp, Briefcase, Clock, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WORK_EXPERIENCES } from '@/app/constants';

const INITIAL_DISPLAY_COUNT = 4;

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll
    ? WORK_EXPERIENCES
    : WORK_EXPERIENCES.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id="workExperience" className="py-24 relative bg-[#050505] overflow-hidden">

      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[rgb(255,87,34)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgb(255,87,34)]/30 to-transparent" />

      <div className="container px-4 mx-auto relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white inline-flex items-center gap-3"
          >
            <Briefcase className="w-8 h-8 text-[rgb(255,87,34)]" />
            <span>Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,87,34)] to-orange-400">Experience</span></span>
          </motion.h2>
          <p className="text-gray-500 mt-4 font-mono text-sm">
            [ PROFESSIONAL_ENVIRONMENT_LOGS ]
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          <AnimatePresence mode='wait'>
            {displayedExperiences.map((experience, index) => (
              <motion.div
                key={experience.company + experience.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div
                  className={`group relative rounded-xl border transition-all duration-500 overflow-hidden
                    ${experience.current
                      ? 'border-[rgb(255,87,34)]/50 bg-[rgb(255,87,34)]/5 shadow-[0_0_30px_rgba(255,87,34,0.1)]'
                      : 'border-white/10 bg-white/5 hover:border-[rgb(255,87,34)]/30 hover:bg-white/10'
                    }
                  `}
                >
                  {experience.current && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgb(255,87,34)] to-transparent opacity-70 animate-[shimmer_2s_infinite]" />
                  )}

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">

                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[rgb(255,87,34)] transition-colors">
                            {experience.title}
                          </h3>
                          {experience.current && (
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgb(255,87,34)]/10 border border-[rgb(255,87,34)] text-[rgb(255,87,34)] text-[10px] font-bold tracking-widest uppercase animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-[rgb(255,87,34)]"></span>
                              Active
                            </span>
                          )}
                        </div>

                        <div className="flex items-center text-lg text-gray-400 font-mono">
                          <span className="text-[rgb(255,87,34)] mr-2">@</span>
                          {experience.company}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 text-xs font-mono text-gray-400">
                        <div className="flex items-center gap-2 px-3 py-2 rounded bg-black/30 border border-white/5">
                          <Calendar className="w-3.5 h-3.5 text-[rgb(255,87,34)]" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded bg-black/30 border border-white/5">
                          <MapPin className="w-3.5 h-3.5 text-[rgb(255,87,34)]" />
                          {experience.location}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded bg-black/30 border border-white/5">
                          <Clock className="w-3.5 h-3.5 text-[rgb(255,87,34)]" />
                          {experience.type}
                        </div>
                      </div>
                    </div>

                    <div className="h-px w-full bg-white/5 mb-6 group-hover:bg-[rgb(255,87,34)]/20 transition-colors" />

                    <div className="relative">
                      <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-3 pl-2 border-l-2 border-transparent hover:border-[rgb(255,87,34)] hover:bg-white/5 p-1 rounded-r transition-all">
                            <span className="mt-1.5 text-[rgb(255,87,34)] text-xs font-mono">{'>_'}</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {WORK_EXPERIENCES.length > INITIAL_DISPLAY_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="group border-[rgb(255,87,34)]/50 text-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)] hover:text-white transition-all duration-300 backdrop-blur-sm px-8 py-6"
            >
              <span className="flex items-center font-mono text-sm tracking-wider uppercase">
                {showAll ? 'Minimize Log' : 'Expand Full History'}
                {showAll ? (
                  <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                )}
              </span>
            </Button>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Work;