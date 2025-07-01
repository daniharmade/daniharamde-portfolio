'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CERTIFICATIONS } from '@/app/constants';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 6); // <--- hanya 6 ditampilkan

    return (
        <section id="certifications" className="py-20">
            <div className="container px-4 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedCerts.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-primary-orange/50 group">
                                <div className="relative aspect-video">
                                    <Image
                                        src={cert.images[0]}
                                        alt={`${cert.title} certificate`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-orange transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        Issued by: <span className="font-medium">{cert.issuedBy}</span>
                                    </p>
                                    <p className="text-muted-foreground mb-4">{cert.date}</p>

                                    {cert.certificateUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="hover:bg-primary-orange hover:text-white border-primary-orange/50"
                                            asChild
                                        >
                                            <a
                                                href={cert.certificateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                View Certificate
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {CERTIFICATIONS.length > 6 && !showAll && (
                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            onClick={() => setShowAll(true)}
                            className="border-primary-orange/50 hover:bg-primary-orange hover:text-white"
                        >
                            View More
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
