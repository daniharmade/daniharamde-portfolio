'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { EXPERIENCES } from '@/app/constants';

const INITIAL_DISPLAY_COUNT = 4;

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll
    ? EXPERIENCES
    : EXPERIENCES.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          <AnimatePresence initial={false}>
            {displayedExperiences.map((experience, index) => (
              <motion.div
                key={experience.company + experience.period}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`p-6 hover:shadow-lg transition-all duration-300 ${
                    experience.current
                      ? 'border-primary-orange bg-primary-orange/5 hover:bg-primary-orange/10'
                      : 'hover:border-primary-orange/50'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="mb-2 md:mb-0">
                      <h3 className="text-xl font-semibold flex flex-wrap gap-2 items-center">
                        {experience.title}
                        <span className="text-primary-orange">@</span>
                        {experience.company}
                        {experience.current && (
                          <Badge
                            variant="default"
                            className="ml-2 bg-primary-orange hover:bg-primary-orange-dark"
                          >
                            Current
                          </Badge>
                        )}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <Badge variant="secondary" className="mb-4">
                    {experience.type}
                  </Badge>

                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {experience.responsibilities.map(
                      (responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      )
                    )}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {EXPERIENCES.length > INITIAL_DISPLAY_COUNT && (
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

export default Experience;
