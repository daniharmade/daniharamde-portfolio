// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { type z } from 'zod';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/components/ui/use-toast';
// import { Phone } from 'lucide-react';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
// import { contactFormSchema } from '@/lib/validations/contact';

// type ContactFormValues = z.infer<typeof contactFormSchema>;
// // Replace with your form submission endpoint
// const FORM_ENDPOINT = 'https://formspree.io/f/xrbkjdwr';

// export default function Contact() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<ContactFormValues>({
//     resolver: zodResolver(contactFormSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       message: '',
//     },
//   });

//   async function onSubmit(data: ContactFormValues) {
//     try {
//       setIsSubmitting(true);
//       const response = await fetch(FORM_ENDPOINT, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message || 'Something went wrong!');
//       }

//       toast({
//         title: 'Success!',
//         description: 'Your message has been sent successfully.',
//       });

//       form.reset();
//     } catch (error) {
//       toast({
//         title: 'Failed to send message',
//         description: 'Please try again later.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <section id="contact" className="py-20 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Get in <span className="text-primary-orange">Touch</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Have a project in mind? Let's discuss how we can work together
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             <div className="glass rounded-xl p-6 border border-border/50 shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">
//                 Contact Information
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <Mail className="w-5 h-5 text-primary-orange" />
//                   <a href="mailto:daniharmade@gmail.com">
//                     <span>daniharmade@gmail.com</span>
//                   </a>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="w-5 h-5 text-primary-orange" />
//                   <span>+62 851-8336-3414</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <MapPin className="w-5 h-5 text-primary-orange" />
//                   <span>Pekanbaru, Indonesia</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="glass rounded-xl p-6 border border-border/50 shadow-lg space-y-4"
//               >
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Name</FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="Your name"
//                           className="bg-background/50"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Email</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="email"
//                           placeholder="Your email"
//                           className="bg-background/50"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Message</FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="Your message"
//                           className="min-h-[150px] bg-background/50"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <Button
//                   type="submit"
//                   className="w-full bg-primary-orange hover:bg-primary-orange-dark"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </Button>
//               </form>
//             </Form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Mail, MapPin, Send, Loader2, Phone, Copy, Check, Signal, Globe } from 'lucide-react';
import { contactFormSchema } from '@/lib/validations/contact';

type ContactFormValues = z.infer<typeof contactFormSchema>;
const FORM_ENDPOINT = 'https://formspree.io/f/xrbkjdwr';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // Fungsi untuk copy text ke clipboard
  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: 'Copied to clipboard',
      description: `${field} has been copied.`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  async function onSubmit(data: ContactFormValues) {
    try {
      setIsSubmitting(true);
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong!');
      }

      toast({
        title: 'Transmission Successful',
        description: 'Your message has been received by the server.',
        className: "border-[rgb(255,87,34)] bg-black text-white"
      });

      form.reset();
    } catch (error) {
      toast({
        title: 'Transmission Failed',
        description: 'Signal lost. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative bg-[#050505] overflow-hidden">

      {/* Background Grid & Glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[rgb(255,87,34)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Signal className="w-5 h-5 text-[rgb(255,87,34)] animate-pulse" />
            <span className="text-[rgb(255,87,34)] font-mono text-sm tracking-widest">LINK_ESTABLISHED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,87,34)] to-orange-400">Contact</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4 font-light">
            Ready to collaborate? Send a decrypted message via the form below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Contact Info & Radar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Location Radar Card */}
            <div className="relative rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 overflow-hidden group hover:border-[rgb(255,87,34)]/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Globe className="w-24 h-24 text-[rgb(255,87,34)] animate-[spin_10s_linear_infinite]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[rgb(255,87,34)]" />
                Current Location
              </h3>

              <div className="relative aspect-[2/1] rounded-lg bg-black/50 border border-white/5 overflow-hidden flex items-center justify-center">
                {/* Faux Map/Radar UI */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.1)_0%,transparent_70%)]" />
                <div className="w-3 h-3 bg-[rgb(255,87,34)] rounded-full shadow-[0_0_20px_rgb(255,87,34)] animate-ping absolute" />
                <div className="w-3 h-3 bg-[rgb(255,87,34)] rounded-full absolute" />
                <div className="absolute bottom-3 left-3 text-xs font-mono text-gray-400">
                  LAT: 0.5071° N <br /> LNG: 101.4478° E
                </div>
                <div className="absolute top-3 right-3 text-xs font-mono text-[rgb(255,87,34)] border border-[rgb(255,87,34)]/30 px-2 py-1 rounded bg-black/60">
                  PEKANBARU, ID
                </div>
              </div>
            </div>

            {/* Contact Channels */}
            <div className="space-y-4">
              {/* Email Card */}
              <div
                onClick={() => copyToClipboard('daniharmade@gmail.com', 'Email')}
                className="cursor-pointer p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[rgb(255,87,34)]/50 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-[rgb(255,87,34)]/10 text-[rgb(255,87,34)] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono mb-0.5">EMAIL_ADDRESS</p>
                    <p className="text-white font-medium group-hover:text-[rgb(255,87,34)] transition-colors">daniharmade@gmail.com</p>
                  </div>
                </div>
                <div className="text-gray-500 group-hover:text-white transition-colors">
                  {copiedField === 'Email' ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </div>
              </div>

              {/* Phone Card */}
              <div
                onClick={() => copyToClipboard('+62 851-8336-3414', 'Phone')}
                className="cursor-pointer p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[rgb(255,87,34)]/50 transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-[rgb(255,87,34)]/10 text-[rgb(255,87,34)] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono mb-0.5">SECURE_LINE</p>
                    <p className="text-white font-medium group-hover:text-[rgb(255,87,34)] transition-colors">+62 851-8336-3414</p>
                  </div>
                </div>
                <div className="text-gray-500 group-hover:text-white transition-colors">
                  {copiedField === 'Phone' ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-2xl bg-[#0a0a0a] border border-white/10 p-1">
              {/* Form Header Decoration */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[rgb(255,87,34)]/50 to-transparent" />

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="bg-black/40 backdrop-blur-xl rounded-xl p-6 md:p-8 space-y-6"
                >
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                    <h3 className="font-mono text-white text-sm tracking-wider">[ COMPOSE_MESSAGE ]</h3>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 font-mono text-xs">IDENTIFIER / NAME</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Input
                              placeholder="Enter your name..."
                              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[rgb(255,87,34)] focus:ring-0 focus:bg-black/60 transition-all pl-4 h-12"
                              {...field}
                            />
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[rgb(255,87,34)] transition-all duration-300 group-hover:w-full group-focus-within:w-full" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 font-mono text-xs">RETURN_ADDRESS / EMAIL</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Input
                              type="email"
                              placeholder="Enter your email..."
                              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[rgb(255,87,34)] focus:ring-0 focus:bg-black/60 transition-all pl-4 h-12"
                              {...field}
                            />
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[rgb(255,87,34)] transition-all duration-300 group-hover:w-full group-focus-within:w-full" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 font-mono text-xs">DATA_PACKET / MESSAGE</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Textarea
                              placeholder="Type your message here..."
                              className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[rgb(255,87,34)] focus:ring-0 focus:bg-black/60 transition-all p-4 resize-none"
                              {...field}
                            />
                            <div className="absolute bottom-1 left-0 h-[2px] w-0 bg-[rgb(255,87,34)] transition-all duration-300 group-hover:w-full group-focus-within:w-full" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-12 bg-[rgb(255,87,34)] hover:bg-orange-700 text-white font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_30px_rgba(255,87,34,0.5)]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ENCRYPTING & SENDING...
                      </>
                    ) : (
                      <>
                        TRANSMIT_MESSAGE <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}