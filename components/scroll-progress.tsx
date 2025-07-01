'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-primary-orange/20 z-50 origin-left"
      style={{ scaleX }}
    >
      <div
        className="absolute right-0 h-full w-20 bg-primary-orange"
        style={{
          boxShadow: '0 0 20px rgba(234, 88, 12, 0.5)',
        }}
      />
    </motion.div>
  );
}
