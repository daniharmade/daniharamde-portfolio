'use client';

import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { cn } from '@/lib/utils';

interface ParticlesProps {
  className?: string;
}

export default function ParticlesComponent({ className }: ParticlesProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className={cn('absolute inset-0 -z-10', className)}
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ea580c',
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'bounce',
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: '#ea580c',
            opacity: 0.1,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.3,
              },
            },
          },
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
      }}
    />
  );
}
