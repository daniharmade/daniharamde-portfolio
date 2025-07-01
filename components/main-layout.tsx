import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GoToTop } from '@/components/go-to-top';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/scroll-progress';
import { ChatBot } from '@/components/chat-bot';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main>{children}</main>
      <Footer />
      <GoToTop />
      <ChatBot />
      <Toaster />
    </>
  );
}
