// 'use client';

// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Calendar, Users, ChevronDown, ChevronUp } from 'lucide-react';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ORGANIZATION_HISTORY } from '@/app/constants';

// const INITIAL_DISPLAY_COUNT = 2;

// const Organization = () => {
//     const [showAll, setShowAll] = useState(false);
//     const displayedOrganizations = showAll
//         ? ORGANIZATION_HISTORY
//         : ORGANIZATION_HISTORY.slice(0, INITIAL_DISPLAY_COUNT);

//     return (
//         <section id="organization" className="py-20 bg-secondary/30">
//             <div className="container px-4 mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-3xl font-bold text-center mb-12"
//                 >
//                     <span className="text-primary-orange">Organization</span> Experience
//                 </motion.h2>

//                 <div className="space-y-8">
//                     <AnimatePresence initial={false}>
//                         {displayedOrganizations.map((org, index) => (
//                             <motion.div
//                                 key={org.name + org.period}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -20 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                             >
//                                 <Card
//                                     className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-orange/50"
//                                 >
//                                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
//                                         <div className="mb-2 md:mb-0">
//                                             <h3 className="text-xl font-semibold flex flex-wrap gap-2 items-center">
//                                                 <Users className="w-5 h-5 text-primary-orange" />
//                                                 {org.name}
//                                             </h3>
//                                             <p className="text-muted-foreground">Divisi: {org.division}</p>
//                                         </div>
//                                         <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                                             <Calendar className="w-4 h-4" />
//                                             {org.period}
//                                         </div>
//                                     </div>

//                                     <Badge variant="secondary" className="mb-4">
//                                         {org.role}
//                                     </Badge>

//                                     <ul className="list-disc list-inside space-y-2 text-muted-foreground">
//                                         {org.jobdesk.map((task, taskIndex) => (
//                                             <li key={taskIndex}>{task}</li>
//                                         ))}
//                                     </ul>
//                                 </Card>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </div>

//                 {ORGANIZATION_HISTORY.length > INITIAL_DISPLAY_COUNT && (
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

// export default Organization;

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

            {/* Background Texture (Dot Matrix) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Decorative Orbs */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(255,87,34)]/5 rounded-full blur-[120px] pointer-events-none" />

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
                        <Users className="w-8 h-8 text-[rgb(255,87,34)]" />

                        {/* TEXT LANGSUNG DI SINI — TANPA h2 DI DALAM h2 */}
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
                                {/* Tech Card Design */}
                                <div className="group relative h-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[rgb(255,87,34)]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,87,34,0.1)]">

                                    {/* Left Accent Strip */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(255,87,34)] to-transparent" />

                                    {/* Top Right ID Number Decoration */}
                                    <div className="absolute top-4 right-4 font-mono text-[10px] text-gray-600 group-hover:text-[rgb(255,87,34)] transition-colors">
                                        #{String(index + 1).padStart(3, '0')}
                                    </div>

                                    <div className="p-6 pl-8">
                                        {/* Header Info */}
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

                                        {/* Role Badge */}
                                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgb(255,87,34)]/10 border border-[rgb(255,87,34)]/20 text-[rgb(255,87,34)]">
                                            <Award className="w-4 h-4" />
                                            <span className="font-bold text-sm tracking-wide">{org.role}</span>
                                        </div>

                                        {/* Jobdesk List */}
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

                                    {/* Bottom Gradient Line */}
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