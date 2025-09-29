'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { EDUCATION_HISTORY } from '@/app/constants';

const INITIAL_DISPLAY_COUNT = 2;

const Education = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedEducation = showAll
        ? EDUCATION_HISTORY
        : EDUCATION_HISTORY.slice(0, INITIAL_DISPLAY_COUNT);

    return (
        <section id="education" className="py-20 bg-secondary/30">
            <div className="container px-4 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    <span className="text-primary-orange">Education</span> 
                </motion.h2>

                <div className="space-y-8">
                    <AnimatePresence initial={false}>
                        {displayedEducation.map((edu, index) => (
                            <motion.div
                                key={edu.university + edu.period}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-orange/50"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                        <div className="mb-2 md:mb-0">
                                            <h3 className="text-xl font-semibold flex flex-wrap gap-2 items-center">
                                                <GraduationCap className="w-5 h-5 text-primary-orange" />
                                                {edu.university}
                                            </h3>
                                            <p className="text-muted-foreground">{edu.major} — {edu.degree}</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {edu.period}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {edu.location}
                                            </div>
                                        </div>
                                    </div>

                                    <Badge variant="secondary" className="mb-4">
                                        GPA: {edu.gpa}
                                    </Badge>

                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                        {edu.activities.map((activity, actIndex) => (
                                            <li key={actIndex}>{activity}</li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {EDUCATION_HISTORY.length > INITIAL_DISPLAY_COUNT && (
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

export default Education;
