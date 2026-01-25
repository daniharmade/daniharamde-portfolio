// 'use client';

// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
// import { Button } from '@/components/ui/button';
// import {
//   Sheet,
// SheetContent,
//   SheetTrigger,
//   SheetHeader,
//   SheetTitle,
// } from '@/components/ui/sheet';
// import { Moon, Sun, Menu } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// const navigation = [
//   { name: 'About', href: '#about' },
//   { name: 'Education', href: '#education' },
//   { name: 'Work', href: '#workExperience' },
//   { name: 'Bootcamp', href: '#bootcampExperience' },
//   { name: 'Project', href: '#projects' },
//   { name: 'Organization', href: '#organization' },
//   { name: 'Certificate', href: '#certifications' },
//   { name: 'Award', href: '#awards' },
//   { name: 'Contact', href: '#contact' },
// ];

// export function Navbar() {
//   const [mounted, setMounted] = useState(false);
//   const [activeSection, setActiveSection] = useState('');
//   const { theme, setTheme } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const observerOptions = {
//       rootMargin: '-20% 0px -80% 0px',
//     };

//     const observerCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     // Observe all sections
//     document.querySelectorAll('section[id]').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <header className="fixed w-full top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
//       <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <div className="flex">
//           {/* <Image src="/logo.png" alt="Logo" width={32} height={32} /> */}
//           <Link href="/" passHref className="text-xl ml-2 font-bold">
//             <span className="text-primary-orange font-semibold">
//               Dani Harmade
//             </span>
//           </Link>
//         </div>

//         <div className="flex items-center gap-4">
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className={`relative py-1 transition-colors ${activeSection === item.href.slice(1)
//                     ? 'text-primary-orange'
//                     : 'hover:text-primary-orange'
//                   }`}
//               >
//                 {item.name}
//                 {activeSection === item.href.slice(1) && (
//                   <span
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-orange rounded-full"
//                     style={{
//                       animation: 'expandWidth 0.2s ease-out forwards',
//                     }}
//                   />
//                 )}
//               </a>
//             ))}
//           </div>

//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//             className="hover:text-primary-orange"
//           >
//             {theme === 'dark' ? (
//               <Sun className="h-5 w-5" />
//             ) : (
//               <Moon className="h-5 w-5" />
//             )}
//           </Button>

//           {/* Mobile Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent>
//               <SheetHeader>
//                 <SheetTitle>Navigation Menu</SheetTitle>
//               </SheetHeader>
//               <div className="flex flex-col gap-4 mt-8">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className={`text-lg transition-colors ${activeSection === item.href.slice(1)
//                         ? 'text-primary-orange font-medium'
//                         : 'hover:text-primary-orange'
//                       }`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>
//     </header>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Moon, Sun, Menu, Terminal, Command } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#workExperience' },
  { name: 'Project', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Bootcamp', href: '#bootcampExperience' },
  { name: 'Organization', href: '#organization' }, 
  { name: 'Certificates', href: '#certifications' },
  { name: 'Awards', href: '#awards' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px', // Adjusted for better triggering
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b 
        ${isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-[rgb(255,87,34)]/20 py-2' 
          : 'bg-transparent border-transparent py-4'
        }`}
    >
      {/* Top Decorative Line (Scanner) */}
      <div className={`absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[rgb(255,87,34)] to-transparent transition-all duration-500 ${isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />

      <nav className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-1.5 rounded bg-[rgb(255,87,34)]/10 border border-[rgb(255,87,34)]/20 group-hover:bg-[rgb(255,87,34)]/20 transition-colors">
             <Terminal className="w-5 h-5 text-[rgb(255,87,34)]" />
          </div>
          <Link href="/" className="text-lg font-bold tracking-tight flex items-center gap-0.5">
            <span className="text-[rgb(255,87,34)] font-mono">&lt;</span>
            <span className="text-white group-hover:text-[rgb(255,87,34)] transition-colors">DaniHarmade</span>
            <span className="text-[rgb(255,87,34)] font-mono">/&gt;</span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm">
            {navigation.map((item) => {
               const isActive = activeSection === item.href.slice(1);
               return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-mono rounded-full transition-all duration-300
                    ${isActive
                      ? 'text-white bg-[rgb(255,87,34)]/20 shadow-[0_0_10px_rgba(255,87,34,0.2)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.name}
                  {/* Active Dot Indicator */}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[rgb(255,87,34)] shadow-[0_0_5px_rgb(255,87,34)]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle (Styled as System Switch) */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden sm:flex hover:bg-[rgb(255,87,34)]/10 hover:text-[rgb(255,87,34)] rounded-full border border-transparent hover:border-[rgb(255,87,34)]/30 transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button> */}

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                    variant="outline" 
                    size="icon" 
                    className="bg-black/50 border-[rgb(255,87,34)]/30 text-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)] hover:text-white"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              
              {/* Mobile Content */}
              <SheetContent side="right" className="w-[300px] bg-[#0a0a0a] border-l border-[rgb(255,87,34)]/30 p-0">
                <SheetHeader className="p-6 border-b border-white/10 bg-[rgb(255,87,34)]/5">
                  <SheetTitle className="flex items-center gap-2 text-[rgb(255,87,34)] font-mono">
                    <Command className="w-5 h-5" /> SYSTEM_NAV
                  </SheetTitle>
                </SheetHeader>
                
                {/* Background Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-10" 
                     style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />

                <div className="flex flex-col gap-2 p-6 relative z-10">
                  {navigation.map((item, i) => (
                    <SheetClose asChild key={item.name}>
                        <a
                        href={item.href}
                        className={`group flex items-center justify-between p-3 rounded-lg border transition-all duration-300
                            ${activeSection === item.href.slice(1)
                                ? 'bg-[rgb(255,87,34)]/10 border-[rgb(255,87,34)]/50 text-white shadow-[0_0_15px_rgba(255,87,34,0.2)]'
                                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-[rgb(255,87,34)]/30 hover:text-[rgb(255,87,34)]'
                            }`}
                        onClick={() => setIsOpen(false)}
                        style={{ animationDelay: `${i * 0.05}s` }}
                        >
                        <span className="font-mono text-sm uppercase tracking-wider flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${activeSection === item.href.slice(1) ? 'bg-[rgb(255,87,34)] animate-pulse' : 'bg-gray-600 group-hover:bg-[rgb(255,87,34)]'}`} />
                            {item.name}
                        </span>
                        <span className="text-xs font-mono opacity-50 group-hover:opacity-100 text-[rgb(255,87,34)]">
                            0{i + 1}
                        </span>
                        </a>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}