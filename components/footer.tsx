// export function Footer() {
//   return (
//     <footer className="border-t bg-background">
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center text-sm text-muted-foreground">
//           <p>
//             © {new Date().getFullYear()} Modified by Dani Harmade. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import { Github, Linkedin, Mail, ArrowUp, Terminal, Wifi, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/daniharmade', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/daniharmade', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:daniharmade@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#workExperience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#020202] pt-20 pb-10 overflow-hidden border-t border-white/5">
      
      {/* Top Glowing Line (Horizon Effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgb(255,87,34)]/50 to-transparent shadow-[0_0_10px_rgb(255,87,34)]" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255,87,34) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="p-2 rounded bg-[rgb(255,87,34)]/10 border border-[rgb(255,87,34)]/20">
                 <Terminal className="w-6 h-6 text-[rgb(255,87,34)]" />
               </div>
               <span className="text-xl font-bold text-white tracking-wider">DANI_HARMADE</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-mono">
              Building decentralized experiences and scalable applications for the future web.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group p-2 rounded-lg bg-white/5 hover:bg-[rgb(255,87,34)]/10 border border-white/10 hover:border-[rgb(255,87,34)] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[rgb(255,87,34)] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-4 bg-[rgb(255,87,34)] rounded-sm" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-500 hover:text-[rgb(255,87,34)] text-sm font-mono transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[rgb(255,87,34)] group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: System Status & Credits */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-4 bg-[rgb(255,87,34)] rounded-sm" />
              System Status
            </h3>
            
            <div className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-500 flex items-center gap-2">
                        <Wifi className="w-3 h-3" /> UPTIME
                    </span>
                    <span className="text-[rgb(255,87,34)]">99.9%</span>
                </div>
                <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-[rgb(255,87,34)] h-full w-[99%]" />
                </div>
                <div className="flex justify-between items-center text-xs font-mono pt-1">
                    <span className="text-gray-500 flex items-center gap-2">
                        <Cpu className="w-3 h-3" /> VERSION
                    </span>
                    <span className="text-white">v2.4.0 (Stable)</span>
                </div>
            </div>

            <div className="text-xs text-gray-600 font-mono">
                Built with Next.js 14 & Tailwind CSS
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 font-mono">
              © {new Date().getFullYear()} Dani Harmade. <span className="hidden md:inline">|</span> All rights reserved.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="rounded-full bg-black border-white/10 hover:border-[rgb(255,87,34)] hover:text-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)]/5 transition-all gap-2 text-xs font-mono group"
          >
            RETURN_TO_TOP
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  );
}