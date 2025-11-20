// 'use client';

// import { useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { CERTIFICATIONS } from '@/app/constants';
// import { Button } from '@/components/ui/button';
// import { ExternalLink } from 'lucide-react';

// const Certifications = () => {
//     const [showAll, setShowAll] = useState(false);
//     const displayedCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 6); // <--- hanya 6 ditampilkan

//     return (
//         <section id="certifications" className="py-20">
//             <div className="container px-4 mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-3xl font-bold text-center mb-12"
//                 >
//                     Certifications
//                 </motion.h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {displayedCerts.map((cert, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: index * 0.05 }}
//                         >
//                             <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-primary-orange/50 group">
//                                 <div className="relative aspect-video">
//                                     <Image
//                                         src={cert.images[0]}
//                                         alt={`${cert.title} certificate`}
//                                         fill
//                                         className="object-cover"
//                                         priority
//                                     />
//                                 </div>

//                                 <div className="p-6">
//                                     <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-orange transition-colors">
//                                         {cert.title}
//                                     </h3>
//                                     <p className="text-sm text-gray-500 mb-2">
//                                         Issued by: <span className="font-medium">{cert.issuedBy}</span>
//                                     </p>
//                                     <p className="text-muted-foreground mb-4">{cert.date}</p>

//                                     {cert.certificateUrl && (
//                                         <Button
//                                             variant="outline"
//                                             size="sm"
//                                             className="hover:bg-primary-orange hover:text-white border-primary-orange/50"
//                                             asChild
//                                         >
//                                             <a
//                                                 href={cert.certificateUrl}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                             >
//                                                 <ExternalLink className="w-4 h-4 mr-2" />
//                                                 View Certificate
//                                             </a>
//                                         </Button>
//                                     )}
//                                 </div>
//                             </Card>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {CERTIFICATIONS.length > 6 && !showAll && (
//                     <div className="text-center mt-12">
//                         <Button
//                             variant="outline"
//                             onClick={() => setShowAll(true)}
//                             className="border-primary-orange/50 hover:bg-primary-orange hover:text-white"
//                         >
//                             View More
//                         </Button>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default Certifications;

'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CERTIFICATIONS } from '@/app/constants';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, CheckCircle2, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 6);

    return (
        <section id="certifications" className="py-24 relative bg-[#050505] overflow-hidden">
            
            {/* Background Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgb(255, 87, 34) 1px, transparent 1px), linear-gradient(90deg, rgb(255, 87, 34) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="container px-4 mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <ShieldCheck className="w-8 h-8 text-[rgb(255,87,34)]" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,87,34)] to-orange-400">Credentials</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 mt-2 font-mono text-sm">
                            [ BLOCKCHAIN_VERIFIED_ASSETS ]
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedCerts.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className="group relative h-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[rgb(255,87,34)]/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,87,34,0.15)]">
                                
                                {/* Image Section with Scanner Effect */}
                                <div className="relative aspect-video overflow-hidden border-b border-white/5">
                                    <Image
                                        src={cert.images[0]}
                                        alt={`${cert.title} certificate`}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        priority={index < 3}
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                                    
                                    {/* Scanner Line Animation */}
                                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden group-hover:block">
                                        <div className="w-full h-[2px] bg-[rgb(255,87,34)] shadow-[0_0_15px_rgb(255,87,34)] animate-[scan_2s_linear_infinite]" />
                                    </div>

                                    {/* Status Badge */}
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur border border-[rgb(255,87,34)]/30 rounded text-[10px] font-mono text-[rgb(255,87,34)] flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> VALID
                                    </div>
                                </div>

                                <div className="p-6 relative">
                                    {/* Holographic Noise Texture */}
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

                                    <div className="relative z-10">
                                        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[rgb(255,87,34)] transition-colors">
                                            {cert.title}
                                        </h3>
                                        
                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between items-end text-sm border-b border-white/5 pb-2">
                                                <span className="text-gray-500 font-mono text-xs">ISSUER</span>
                                                <span className="text-gray-300 font-medium text-right">{cert.issuedBy}</span>
                                            </div>
                                            <div className="flex justify-between items-end text-sm border-b border-white/5 pb-2">
                                                <span className="text-gray-500 font-mono text-xs">DATE</span>
                                                <span className="text-gray-300 font-mono text-xs">{cert.date}</span>
                                            </div>
                                        </div>

                                        {cert.certificateUrl && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full bg-white/5 border-white/10 text-gray-300 hover:bg-[rgb(255,87,34)] hover:border-[rgb(255,87,34)] hover:text-white transition-all duration-300 group/btn"
                                                asChild
                                            >
                                                <a
                                                    href={cert.certificateUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="font-mono text-xs tracking-wider mr-2">VIEW_CREDENTIAL</span>
                                                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {CERTIFICATIONS.length > 6 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mt-16"
                    >
                        <Button
                            variant="outline"
                            onClick={() => setShowAll(!showAll)}
                            className="group bg-transparent border border-[rgb(255,87,34)]/50 text-[rgb(255,87,34)] hover:bg-[rgb(255,87,34)] hover:text-white px-8 py-6 backdrop-blur-sm transition-all duration-300"
                        >
                            {showAll ? (
                                <span className="flex items-center gap-2 font-mono uppercase tracking-widest text-xs">
                                    Collapse <ChevronUp className="w-4 h-4" />
                                </span>
                            ) : (
                                <span className="flex items-center gap-2 font-mono uppercase tracking-widest text-xs">
                                    Load More Assets <ChevronDown className="w-4 h-4" />
                                </span>
                            )}
                        </Button>
                    </motion.div>
                )}
            </div>

            {/* CSS Animation for Scanner */}
            <style jsx global>{`
                @keyframes scan {
                    0% { transform: translateY(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(200px); opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default Certifications;