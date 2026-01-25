'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, ChevronDown, ChevronUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EDUCATION_HISTORY } from '@/app/constants';

const INITIAL_DISPLAY_COUNT = 2;

const Education = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedEducation = showAll
        ? EDUCATION_HISTORY
        : EDUCATION_HISTORY.slice(0, INITIAL_DISPLAY_COUNT);

    const glowColor = 'rgb(255, 87, 34)';

    return (
        <section id="education" className="py-24 relative bg-[#050505] overflow-hidden">

            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(${glowColor} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 justify-center">
                            <span className="text-[rgb(255,87,34)] font-mono text-2xl">&lt;</span>
                            Education History
                            <span className="text-[rgb(255,87,34)] font-mono text-2xl">/&gt;</span>
                        </h2>
                        <div className="h-1 w-24 bg-[rgb(255,87,34)] mx-auto mt-4 rounded shadow-[0_0_10px_rgb(255,87,34)]" />
                    </motion.div>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    <div className="absolute left-4 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[rgb(255,87,34)] via-gray-800 to-transparent opacity-30" />

                    <AnimatePresence mode='wait'>
                        {displayedEducation.map((edu, index) => (
                            <motion.div
                                key={edu.university + edu.period}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-12 md:pl-20 pb-12 last:pb-0 group"
                            >
                                <div className="absolute left-[11px] md:left-[27px] top-6 w-4 h-4 rounded-full bg-[#050505] border-2 border-[rgb(255,87,34)] shadow-[0_0_10px_rgb(255,87,34)] z-20 group-hover:scale-125 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-[rgb(255,87,34)] rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                                </div>

                                <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 group-hover:border-[rgb(255,87,34)]/50 group-hover:shadow-[0_0_30px_rgba(255,87,34,0.15)]">

                                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[rgb(255,87,34)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[rgb(255,87,34)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* HEADER SECTION: University di kiri, Info di kanan */}
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                        <div className="max-w-[70%]">
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[rgb(255,87,34)] transition-colors">
                                                {edu.university}
                                            </h3>
                                            <div className="flex items-center gap-2 text-gray-400 mt-1">
                                                <GraduationCap className="w-4 h-4 text-[rgb(255,87,34)]" />
                                                <span className="text-sm md:text-base">{edu.major} — {edu.degree}</span>
                                            </div>
                                        </div>

                                        {/* Info Lokasi & Tahun di pojok kanan */}
                                        <div className="flex flex-col items-start md:items-end gap-2 font-mono text-xs">
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-gray-300">
                                                <Calendar className="w-3 h-3 text-[rgb(255,87,34)]" />
                                                {edu.period}
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-gray-300">
                                                <MapPin className="w-3 h-3 text-[rgb(255,87,34)]" />
                                                {edu.location}
                                            </div>
                                        </div>
                                    </div>

                                    {/* GPA SCORE */}
                                    <div className="flex items-center gap-3 mb-6 p-3 bg-[rgb(255,87,34)]/5 border-l-2 border-[rgb(255,87,34)] rounded-r-lg w-fit">
                                        <Award className="w-5 h-5 text-[rgb(255,87,34)]" />
                                        <span className="text-sm font-mono text-gray-300">
                                            GPA: <span className="text-white font-bold text-lg ml-2">{edu.gpa}</span>
                                        </span>
                                    </div>

                                    <ul className="space-y-3">
                                        {edu.activities.map((activity, actIndex) => (
                                            <li key={actIndex} className="flex items-start gap-3 text-gray-400 text-sm group/item">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgb(255,87,34)]/50 group-hover/item:bg-[rgb(255,87,34)] transition-colors" />
                                                <span className="group-hover/item:text-gray-300 transition-colors">{activity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {EDUCATION_HISTORY.length > INITIAL_DISPLAY_COUNT && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center mt-12 relative z-20"
                    >
                        <Button
                            variant="outline"
                            onClick={() => setShowAll(!showAll)}
                            className="bg-transparent border border-[rgb(255,87,34)] text-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)] hover:text-white transition-all duration-300 px-8 py-6 rounded-full font-mono text-sm group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {showAll ? 'COLLAPSE DATA' : 'LOAD MORE HISTORY'}
                                {showAll ? (
                                    <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                )}
                            </span>
                            <div className="absolute inset-0 bg-[rgb(255,87,34)]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Education;