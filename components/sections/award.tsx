// 'use client';

// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { AWARDS } from '@/app/constants';

// const INITIAL_DISPLAY_COUNT = 4;

// const Awards = () => {
//     const [showAll, setShowAll] = useState(false);
//     const displayedAwards = showAll ? AWARDS : AWARDS.slice(0, INITIAL_DISPLAY_COUNT);

//     return (
//         <section id="awards" className="py-20 bg-secondary/30">
//             <div className="container px-4 mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-3xl font-bold text-center mb-12"
//                 >
//                     <span className="text-primary-orange">Awards</span> & Honors
//                 </motion.h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <AnimatePresence initial={false}>
//                         {displayedAwards.map((award, index) => (
//                             <motion.div
//                                 key={award.title + award.issueDate}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -20 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                             >
//                                 <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary-orange/50">
//                                     <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
//                                     <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
//                                         <div className="flex items-center gap-1">
//                                             <Calendar className="w-4 h-4" />
//                                             {award.issueDate}
//                                         </div>
//                                         <Badge variant="secondary">{award.issuedBy}</Badge>
//                                     </div>
//                                     <p className="text-muted-foreground">{award.description}</p>
//                                     {award.certificateUrl && (
//                                         <a
//                                             href={award.certificateUrl}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="inline-flex items-center mt-4 text-primary-orange hover:underline"
//                                         >
//                                             View Proof <ExternalLink className="ml-1 w-4 h-4" />
//                                         </a>
//                                     )}
//                                 </Card>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </div>

//                 {AWARDS.length > INITIAL_DISPLAY_COUNT && (
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

// export default Awards;

'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp, ExternalLink, Trophy, Medal, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AWARDS } from '@/app/constants';

const INITIAL_DISPLAY_COUNT = 4;

const Awards = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedAwards = showAll ? AWARDS : AWARDS.slice(0, INITIAL_DISPLAY_COUNT);

    return (
        <section id="awards" className="py-24 relative bg-[#050505] overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[rgb(255,87,34)]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3"
                    >
                        <Trophy className="w-10 h-10 text-[rgb(255,87,34)] relative z-10" />

                        {/* TEXT LANGSUNG DI SINI — TANPA h2 DI DALAM h2 */}
                        <span className="text-3xl md:text-4xl font-bold text-white">
                            Honors &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,87,34)] to-orange-500">
                                Awards
                            </span>
                        </span>
                    </motion.h2>

                    <p className="text-gray-500 mt-4 font-mono text-sm">
                        [ ACHIEVEMENT_UNLOCKED_LOG ]
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <AnimatePresence mode='popLayout'>
                        {displayedAwards.map((award, index) => (
                            <motion.div
                                key={award.title + award.issueDate}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                layout
                            >
                                {/* Glass Trophy Case Card */}
                                <div className="group relative h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-[rgb(255,87,34)]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,87,34,0.15)]">

                                    {/* Top Spotlight Gradient Effect */}
                                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[rgb(255,87,34)]/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                                    {/* Large Decorative Icon Background */}
                                    <div className="absolute -right-6 -top-6 text-white/5 rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700">
                                        <Medal className="w-40 h-40" />
                                    </div>

                                    <div className="p-6 md:p-8 relative z-10 flex flex-col h-full">
                                        {/* Header: Icon & Title */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 shadow-lg group-hover:border-[rgb(255,87,34)]/30 transition-colors">
                                                <Crown className="w-6 h-6 text-[rgb(255,87,34)]" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[rgb(255,87,34)] transition-colors">
                                                    {award.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Metadata Badge */}
                                        <div className="flex flex-wrap items-center gap-3 mb-6">
                                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-1.5">
                                                <Calendar className="w-3 h-3 text-[rgb(255,87,34)]" />
                                                {award.issueDate}
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-[rgb(255,87,34)]/10 border border-[rgb(255,87,34)]/20 text-xs font-mono text-[rgb(255,87,34)]">
                                                ISSUER: {award.issuedBy}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {award.description}
                                        </p>

                                        {/* Action / Proof */}
                                        {award.certificateUrl && (
                                            <div className="pt-4 border-t border-white/5">
                                                <a
                                                    href={award.certificateUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-[rgb(255,87,34)] transition-colors group/link"
                                                >
                                                    <span className="border-b border-dashed border-gray-600 group-hover/link:border-[rgb(255,87,34)] pb-0.5">
                                                        VERIFY_ACHIEVEMENT
                                                    </span>
                                                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More Button */}
                {AWARDS.length > INITIAL_DISPLAY_COUNT && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center mt-12"
                    >
                        <Button
                            variant="outline"
                            onClick={() => setShowAll(!showAll)}
                            className="group bg-[#0a0a0a] border border-white/20 text-white hover:border-[rgb(255,87,34)] hover:text-[rgb(255,87,34)] transition-all px-8 py-6 rounded-full"
                        >
                            {showAll ? (
                                <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                                    Show Less <ChevronUp className="w-4 h-4" />
                                </span>
                            ) : (
                                <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                                    View All Honors <ChevronDown className="w-4 h-4" />
                                </span>
                            )}
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Awards;