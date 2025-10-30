'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AWARDS } from '@/app/constants';

const INITIAL_DISPLAY_COUNT = 4;

const Awards = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedAwards = showAll ? AWARDS : AWARDS.slice(0, INITIAL_DISPLAY_COUNT);

    return (
        <section id="awards" className="py-20 bg-secondary/30">
            <div className="container px-4 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    <span className="text-primary-orange">Awards</span> & Honors
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence initial={false}>
                        {displayedAwards.map((award, index) => (
                            <motion.div
                                key={award.title + award.issueDate}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary-orange/50">
                                    <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {award.issueDate}
                                        </div>
                                        <Badge variant="secondary">{award.issuedBy}</Badge>
                                    </div>
                                    <p className="text-muted-foreground">{award.description}</p>
                                    {award.certificateUrl && (
                                        <a
                                            href={award.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center mt-4 text-primary-orange hover:underline"
                                        >
                                            View Proof <ExternalLink className="ml-1 w-4 h-4" />
                                        </a>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {AWARDS.length > INITIAL_DISPLAY_COUNT && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center mt-8"
                    >
                        <Button
                            variant="outline"
                            onClick={() => setShowAll(!showAll)}
                            className="group border-primary-orange/50 hover:bg-primary-orange hover:text-white"
                        >
                            {showAll ? (
                                <>
                                    Show Less
                                    <ChevronUp className="ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                                </>
                            ) : (
                                <>
                                    Show More
                                    <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                                </>
                            )}
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Awards;
