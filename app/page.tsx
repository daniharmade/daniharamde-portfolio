import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Work from '@/components/sections/work';
import Bootcamp from '@/components/sections/bootcamp';
import Award from '@/components/sections/award';
import Projects from '@/components/sections/projects';
import Certifications from '@/components/sections/certificate';
import Contact from '@/components/sections/contact';
import Education from '@/components/sections/education';
import Organization from '@/components/sections/organization';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Work />
      <Projects />
      <Education />
      <Bootcamp />
      <Organization />
      <Certifications />
      <Award />
      <Contact />
    </main>
  );
}
