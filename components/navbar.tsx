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
} from '@/components/ui/sheet';
import { Moon, Sun, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificate', href: '#certifications' },
  { name: 'Work', href: '#workExperience' },
  { name: 'Bootcamp', href: '#bootcampExperience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
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

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed w-full top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex">
          {/* <Image src="/logo.png" alt="Logo" width={32} height={32} /> */}
          <Link href="/" passHref className="text-xl ml-2 font-bold">
            <span className="text-primary-orange font-semibold">
              Dani Harmade
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-1 transition-colors ${activeSection === item.href.slice(1)
                    ? 'text-primary-orange'
                    : 'hover:text-primary-orange'
                  }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-orange rounded-full"
                    style={{
                      animation: 'expandWidth 0.2s ease-out forwards',
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:text-primary-orange"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-lg transition-colors ${activeSection === item.href.slice(1)
                        ? 'text-primary-orange font-medium'
                        : 'hover:text-primary-orange'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
// import { Button } from '@/components/ui/button';
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetHeader,
//   SheetTitle,
// } from '@/components/ui/sheet';
// import { Moon, Sun, Menu, Github, Twitter, Linkedin } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// const navigation = [
//   { name: 'About', href: '#about' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Experience', href: '#experience' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Contact', href: '#contact' },
// ];

// const socialLinks = [
//   { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
//   {
//     name: 'X (Twitter)',
//     icon: Twitter,
//     href: 'https://twitter.com/yourusername',
//   },
//   {
//     name: 'LinkedIn',
//     icon: Linkedin,
//     href: 'https://linkedin.com/in/yourusername',
//   },
// ];

// export function Navbar() {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <header className="fixed w-full top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
//       <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link href="/" passHref className="flex">
//           <Image src="/logo.png" alt="Logo" width={32} height={32} />
//           <a href="#" className="text-xl ml-2 font-bold">
//             Pragusga
//           </a>
//         </Link>

//         <div className="flex items-center gap-4">
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="hover:text-primary-orange transition-colors"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
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
//                     className="text-lg hover:text-primary-orange transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//                 <div className="flex gap-4 mt-4">
//                   {socialLinks.map((social) => {
//                     const Icon = social.icon;
//                     return (
//                       <a
//                         key={social.name}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-2 hover:text-primary-orange transition-colors"
//                         aria-label={social.name}
//                       >
//                         <Icon className="h-5 w-5" />
//                       </a>
//                     );
//                   })}
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>
//     </header>
//   );
// }
