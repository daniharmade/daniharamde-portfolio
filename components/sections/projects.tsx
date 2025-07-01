'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PROJECTS } from '@/app/constants';

const ProjectCarousel = ({
  images,
  title,
  delay = 4000, // Default delay if not provided
}: {
  images: string[];
  title: string;
  delay?: number;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [Autoplay({ delay, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image, imageIndex) => (
            <div key={imageIndex} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative aspect-video">
                <Image
                  src={image}
                  alt={`${title} screenshot ${imageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority={imageIndex === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 hover:bg-background border border-primary-orange/50 hover:border-primary-orange"
          onClick={scrollPrev}
        >
          <ArrowLeft className="h-4 w-4 text-primary-orange" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 hover:bg-background border border-primary-orange/50 hover:border-primary-orange"
          onClick={scrollNext}
        >
          <ArrowRight className="h-4 w-4 text-primary-orange" />
        </Button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => scrollTo(dotIndex)}
            className={`h-1.5 rounded-full transition-all duration-300 
              ${
                selectedIndex === dotIndex
                  ? 'w-3 bg-primary-orange'
                  : 'w-1.5 bg-primary-orange/50 hover:bg-primary-orange'
              }`}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const INITIAL_DISPLAY_COUNT = 6;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? PROJECTS
    : PROJECTS.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-primary-orange/50 group">
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                  delay={project.carouselDelay}
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.sourceCode && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 min-w-[140px] hover:bg-primary-orange hover:text-white border-primary-orange/50"
                        asChild
                      >
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 min-w-[140px] hover:bg-primary-orange hover:text-white border-primary-orange/50"
                        asChild
                      >
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {PROJECTS.length > INITIAL_DISPLAY_COUNT && (
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

export default Projects;
