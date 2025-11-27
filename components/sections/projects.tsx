'use client';

import { Button } from '@/components/ui/button';
import {
  Github,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Layers,
  Globe
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
  delay = 4000,
}: {
  images: string[];
  title: string;
  delay?: number;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
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
    <div className="relative group border-b border-white/5 bg-black/40">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image, imageIndex) => (
            <div key={imageIndex} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative aspect-video group-hover:brightness-110 transition-all duration-500">
                <Image
                  src={image}
                  alt={`${title} screenshot ${imageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority={imageIndex === 0}
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-2 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto h-10 w-10 rounded bg-black/50 backdrop-blur border border-white/10 hover:border-[rgb(255,87,34)] hover:text-[rgb(255,87,34)] hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300"
          onClick={scrollPrev}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto h-10 w-10 rounded bg-black/50 backdrop-blur border border-white/10 hover:border-[rgb(255,87,34)] hover:text-[rgb(255,87,34)] hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 duration-300"
          onClick={scrollNext}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => scrollTo(dotIndex)}
            className={`h-1 rounded-sm transition-all duration-300 
              ${selectedIndex === dotIndex
                ? 'w-6 bg-[rgb(255,87,34)] shadow-[0_0_8px_rgb(255,87,34)]'
                : 'w-2 bg-white/30 hover:bg-white/60'
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
    <section id="projects" className="py-24 relative bg-[#050505] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgb(255,87,34)]/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3"
          >
            <Layers className="w-8 h-8 text-[rgb(255,87,34)]" />
            <span>Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,87,34)] to-orange-300">Projects</span></span>
          </motion.h2>
          <p className="text-gray-500 mt-4 font-mono text-sm">
            [ DEPLOYED_APPLICATIONS ]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="group h-full flex flex-col bg-white/5 border border-white/10 hover:border-[rgb(255,87,34)]/50 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(255,87,34,0.1)] transition-all duration-500 relative">

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgb(255,87,34)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <ProjectCarousel images={project.images} title={project.title} />

                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="absolute inset-0 bg-black/40 -z-10" />

                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[rgb(255,87,34)] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                      v1.0
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="px-2.5 py-1 bg-[rgb(255,87,34)]/10 border border-[rgb(255,87,34)]/20 text-[rgb(255,87,34)] rounded text-xs font-mono flex items-center gap-1"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2 border-t border-white/5">
                      {project.sourceCode && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent border-white/20 text-gray-300 hover:border-[rgb(255,87,34)] hover:text-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)]/5 transition-all font-mono text-xs"
                          asChild
                        >
                          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5 mr-2" />
                            <span className="hidden sm:inline">CODE</span>
                          </a>
                        </Button>
                      )}
                      {project.liveDemo && (
                        <Button
                          size="sm"
                          className="flex-1 bg-[rgb(255,87,34)] hover:bg-orange-700 text-white border-0 font-mono text-xs shadow-[0_0_15px_rgba(255,87,34,0.3)] hover:shadow-[0_0_25px_rgba(255,87,34,0.5)] transition-all"
                          asChild
                        >
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-3.5 h-3.5 mr-2" />
                            DEMO
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {PROJECTS.length > INITIAL_DISPLAY_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="group border-[rgb(255,87,34)]/50 text-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)] hover:text-white backdrop-blur-sm transition-all px-8"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More Projects <ChevronDown className="ml-2 h-4 w-4" />
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