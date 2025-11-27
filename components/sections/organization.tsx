'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Users, ChevronDown, ChevronUp, Award, Hexagon, Share2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ORGANIZATION_HISTORY } from '@/app/constants';

const INITIAL_DISPLAY_COUNT = 2;

const Organization = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedOrganizations = showAll
        ? ORGANIZATION_HISTORY
        : ORGANIZATION_HISTORY.slice(0, INITIAL_DISPLAY_COUNT);

    return (
        <section id="organization" className="py-24 relative bg-[#050505] overflow-hidden">

            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(255,87,34)]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3"
                    >
                        <Users className="w-8 h-8 text-[rgb(255,87,34)]" />

                        <span className="text-3xl md:text-4xl font-bold text-white">
                            Organization{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,87,34)] to-orange-500">
                                History
                            </span>
                        </span>
                    </motion.h2>

                    <p className="text-gray-500 mt-4 font-mono text-sm">
                        [ ADAPTATION & LEADERSHIP ]
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <AnimatePresence mode='popLayout'>
                        {displayedOrganizations.map((org, index) => (
                            <motion.div
                                key={org.name + org.period}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                layout
                            >
                                <div className="group relative h-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[rgb(255,87,34)]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,87,34,0.1)]">

                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(255,87,34)] to-transparent" />

                                    <div className="absolute top-4 right-4 font-mono text-[10px] text-gray-600 group-hover:text-[rgb(255,87,34)] transition-colors">
                                        #{String(index + 1).padStart(3, '0')}
                                    </div>

                                    <div className="p-6 pl-8">
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Hexagon className="w-4 h-4 text-[rgb(255,87,34)] fill-[rgb(255,87,34)]/20" />
                                                <h3 className="text-xl font-bold text-white group-hover:text-[rgb(255,87,34)] transition-colors">
                                                    {org.name}
                                                </h3>
                                            </div>

                                            <div className="flex flex-wrap gap-3 text-sm text-gray-400 font-mono mt-3">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5 text-[rgb(255,87,34)]" />
                                                    {org.period}
                                                </div>
                                                <div className="w-px h-4 bg-gray-700" />
                                                <div className="flex items-center gap-1.5">
                                                    <Share2 className="w-3.5 h-3.5 text-[rgb(255,87,34)]" />
                                                    {org.division}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgb(255,87,34)]/10 border border-[rgb(255,87,34)]/20 text-[rgb(255,87,34)]">
                                            <Award className="w-4 h-4" />
                                            <span className="font-bold text-sm tracking-wide">{org.role}</span>
                                        </div>

                                        <div className="space-y-3 border-t border-white/5 pt-4">
                                            {org.jobdesk.map((task, taskIndex) => (
                                                <div key={taskIndex} className="flex items-start gap-3 text-sm text-gray-400 group/item">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-gray-600 group-hover/item:bg-[rgb(255,87,34)] transition-colors rotate-45" />
                                                    <span className="group-hover/item:text-gray-300 transition-colors">
                                                        {task}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[rgb(255,87,34)]/0 via-[rgb(255,87,34)]/20 to-[rgb(255,87,34)]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {ORGANIZATION_HISTORY.length > INITIAL_DISPLAY_COUNT && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center mt-12"
                    >
                        <Button
                            variant="outline"
                            onClick={() => setShowAll(!showAll)}
                            className="group bg-transparent border border-white/20 text-white hover:border-[rgb(255,87,34)] hover:text-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)]/5 transition-all px-6 py-2 font-mono text-sm"
                        >
                            {showAll ? (
                                <span className="flex items-center gap-2">
                                    Show Less <ChevronUp className="w-4 h-4" />
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    View All Organizations <ChevronDown className="w-4 h-4" />
                                </span>
                            )}
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Organization;