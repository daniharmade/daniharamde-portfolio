// 'use client';

// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { AnimatePresence, motion } from 'framer-motion';
// import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { BOOTCAMP_EXPERIENCES } from '@/app/constants';

// const INITIAL_DISPLAY_COUNT = 4;

// const Bootcamp = () => {
//     const [showAll, setShowAll] = useState(false);
//     const displayedExperiences = showAll
//         ? BOOTCAMP_EXPERIENCES
//         : BOOTCAMP_EXPERIENCES.slice(0, INITIAL_DISPLAY_COUNT);

//     return (
//         <section id="bootcampExperience" className="py-20 bg-secondary/30">
//             <div className="container px-4 mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-3xl font-bold text-center mb-12"
//                 >
//                     <span className="text-primary-orange">Bootcamp</span> Experience
//                 </motion.h2>

//                 <div className="space-y-8">
//                     <AnimatePresence initial={false}>
//                         {displayedExperiences.map((experience, index) => (
//                             <motion.div
//                                 key={experience.company + experience.period}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -20 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                             >
//                                 <Card
//                                     className={`p-6 hover:shadow-lg transition-all duration-300 ${experience.current
//                                             ? 'border-primary-orange bg-primary-orange/5 hover:bg-primary-orange/10'
//                                             : 'hover:border-primary-orange/50'
//                                         }`}
//                                 >
//                                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
//                                         <div className="mb-2 md:mb-0">
//                                             <h3 className="text-xl font-semibold flex flex-wrap gap-2 items-center">
//                                                 {experience.title}
//                                                 <span className="text-primary-orange">@</span>
//                                                 {experience.company}
//                                                 {experience.current && (
//                                                     <Badge
//                                                         variant="default"
//                                                         className="ml-2 bg-primary-orange hover:bg-primary-orange-dark"
//                                                     >
//                                                         Current
//                                                     </Badge>
//                                                 )}
//                                             </h3>
//                                         </div>
//                                         <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
//                                             <div className="flex items-center gap-1">
//                                                 <Calendar className="w-4 h-4" />
//                                                 {experience.period}
//                                             </div>
//                                             <div className="flex items-center gap-1">
//                                                 <MapPin className="w-4 h-4" />
//                                                 {experience.location}
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <Badge variant="secondary" className="mb-4">
//                                         {experience.type}
//                                     </Badge>

//                                     <ul className="list-disc list-inside space-y-2 text-muted-foreground">
//                                         {experience.responsibilities.map(
//                                             (responsibility, respIndex) => (
//                                                 <li key={respIndex}>{responsibility}</li>
//                                             )
//                                         )}
//                                     </ul>
//                                 </Card>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </div>

//                 {BOOTCAMP_EXPERIENCES.length > INITIAL_DISPLAY_COUNT && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.5 }}
//                         className="flex justify-center mt-8"
//                     >
//                         <Button
//                             variant="outline"
//                             onClick={() => setShowAll(!showAll)}
//                             className="group border-primary-orange/50 hover:bg-primary-orange hover:text-white"
//                         >
//                             {showAll ? (
//                                 <>
//                                     Show Less
//                                     <ChevronUp className="ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
//                                 </>
//                             ) : (
//                                 <>
//                                     Show More
//                                     <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
//                                 </>
//                             )}
//                         </Button>
//                     </motion.div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Bootcamp;

'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp, Terminal, Cpu, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BOOTCAMP_EXPERIENCES } from '@/app/constants';

const INITIAL_DISPLAY_COUNT = 4;

const Bootcamp = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedExperiences = showAll
        ? BOOTCAMP_EXPERIENCES
        : BOOTCAMP_EXPERIENCES.slice(0, INITIAL_DISPLAY_COUNT);

    return (
        <section id="bootcampExperience" className="py-24 relative bg-[#050505] overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[rgb(255,87,34)]/5 rounded-full blur-[120px] pointer-events-none" />
            {/* Floating Code Symbols Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none select-none font-mono text-4xl text-[rgb(255,87,34)] overflow-hidden">
                <div className="absolute top-20 left-10 rotate-12">{`{ }`}</div>
                <div className="absolute top-40 right-20 -rotate-12">{`</>`}</div>
                <div className="absolute bottom-20 left-1/3 rotate-45">{`//`}</div>
            </div>

            <div className="container px-4 mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
                            <Terminal className="w-8 h-8 text-[rgb(255,87,34)]" />
                            <span>Intensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,87,34)] to-orange-200">Training</span></span>
                        </h2>
                        <p className="text-gray-500 mt-4 font-mono text-sm tracking-wider">
                            [ SYSTEM UPGRADE_HISTORY ]
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {displayedExperiences.map((experience, index) => (
                            <motion.div
                                key={experience.company + experience.period}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                {/* Terminal Card */}
                                <div
                                    className={`h-full flex flex-col relative rounded-xl border transition-all duration-300 group
                                        ${experience.current
                                            ? 'border-[rgb(255,87,34)]/60 bg-[rgb(255,87,34)]/5 shadow-[0_0_20px_rgba(255,87,34,0.15)]'
                                            : 'border-white/10 bg-[#0a0a0a] hover:border-[rgb(255,87,34)]/40 hover:bg-white/5'
                                        }
                                    `}
                                >
                                    {/* Terminal Header Bar */}
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/20 rounded-t-xl">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        <div className="ml-auto text-[10px] font-mono text-gray-500 flex items-center gap-1">
                                            <Cpu className="w-3 h-3" /> bash --v.1.0
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        {/* Card Header */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    {experience.current && (
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(255,87,34)] opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(255,87,34)]"></span>
                                                        </span>
                                                    )}
                                                    <h3 className="text-xl font-bold text-white group-hover:text-[rgb(255,87,34)] transition-colors">
                                                        {experience.title}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-400 font-mono">
                                                    <span className="text-[rgb(255,87,34)] font-bold mr-1">@</span>
                                                    {experience.company}
                                                </div>
                                            </div>

                                            {/* Type Badge */}
                                            <div className="px-3 py-1 rounded border border-white/10 bg-white/5 text-xs font-mono text-gray-300">
                                                {experience.type}
                                            </div>
                                        </div>

                                        {/* Metadata Row */}
                                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-mono mb-6 pb-4 border-b border-white/5 border-dashed">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-[rgb(255,87,34)]" />
                                                {experience.period}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5 text-[rgb(255,87,34)]" />
                                                {experience.location}
                                            </div>
                                        </div>

                                        {/* Learning Outcomes (Command Line Style) */}
                                        <div className="space-y-3 flex-grow bg-black/20 rounded p-3 font-mono text-sm border border-white/5">
                                            {experience.responsibilities.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2 text-gray-400 group/line">
                                                    <span className="text-[rgb(255,87,34)] select-none">$</span>
                                                    <span className="group-hover/line:text-white transition-colors">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Decorative Footer */}
                                        {experience.current && (
                                            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[rgb(255,87,34)]">
                                                <Sparkles className="w-3 h-3" />
                                                <span>IN_PROGRESS...</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More Button */}
                {BOOTCAMP_EXPERIENCES.length > INITIAL_DISPLAY_COUNT && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center mt-12"
                    >
                        <Button
                            variant="outline"
                            onClick={() => setShowAll(!showAll)}
                            className="group bg-transparent border border-white/20 text-white hover:border-[rgb(255,87,34)] hover:text-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)]/5 transition-all duration-300"
                        >
                            {showAll ? (
                                <span className="flex items-center gap-2">
                                    Hide Terminal <ChevronUp className="w-4 h-4" />
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Load All Modules <ChevronDown className="w-4 h-4" />
                                </span>
                            )}
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Bootcamp;