// 'use client';

// import { useCallback } from 'react';
// import type { Engine } from 'tsparticles-engine';
// import Particles from 'react-particles';
// import { loadSlim } from 'tsparticles-slim';
// import { cn } from '@/lib/utils';

// interface ParticlesProps {
//   className?: string;
// }

// export default function ParticlesComponent({ className }: ParticlesProps) {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       className={cn('absolute inset-0 -z-10', className)}
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         particles: {
//           number: {
//             value: 30,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: {
//             value: '#ea580c',
//           },
//           opacity: {
//             value: 0.4,
//           },
//           size: {
//             value: 3,
//             random: true,
//           },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: 'none',
//             random: true,
//             straight: false,
//             outModes: {
//               default: 'bounce',
//             },
//           },
//           links: {
//             enable: true,
//             distance: 150,
//             color: '#ea580c',
//             opacity: 0.1,
//             width: 1,
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: 'grab',
//             },
//           },
//           modes: {
//             grab: {
//               distance: 140,
//               links: {
//                 opacity: 0.3,
//               },
//             },
//           },
//         },
//         background: {
//           color: {
//             value: 'transparent',
//           },
//         },
//       }}
//     />
//   );
// }

'use client';

import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { cn } from '@/lib/utils';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  color?: string;
}

export default function ParticlesComponent({ 
  className,
  quantity = 40, // Default jumlah partikel
  staticity = 50, // Mengontrol kecepatan (semakin kecil angka, semakin cepat)
  color = '#FF5722' // Default: Brand Orange (rgb(255, 87, 34))
}: ParticlesProps) {
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Menghitung kecepatan berdasarkan prop staticity
  // Semakin tinggi staticity, semakin lambat (lebih atmosferik)
  const movementSpeed = (100 - staticity) / 20; 

  return (
    <Particles
      className={cn('absolute inset-0 -z-10 pointer-events-none', className)}
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        fullScreen: { enable: false },
        particles: {
          number: {
            value: quantity,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: color,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.5 }, // Random opacity untuk efek kedalaman 3D
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 }, // Random size untuk variasi
          },
          links: {
            enable: true,
            distance: 150,
            color: color,
            opacity: 0.2, // Link lebih transparan agar elegan
            width: 1,
            triangles: {
              enable: false,
              opacity: 0.05,
            }
          },
          move: {
            enable: true,
            speed: movementSpeed,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'out', // Partikel keluar layar lalu masuk lagi (fluid)
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Efek jaring laba-laba saat hover
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.5,
                color: color
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        detectRetina: true,
      }}
    />
  );
}