'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from 'ai/react';
import { Bot, Send, X, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Markdown from 'react-markdown';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      onError: (error) => {
        if (error.message.includes('rate limit')) {
          setErrorMsg(error.message);
        }
      },
    });
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [goToTopVisible, setGoToTopVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setGoToTopVisible(true);
      } else {
        setGoToTopVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed h-12 w-12 rounded-full shadow-lg bg-primary-orange hover:bg-primary-orange-dark z-50 right-7 bottom-24 transform transition-transform',
          goToTopVisible ? 'translate-y-0' : 'translate-y-12',
          // Pulsing animation when closed
          !isOpen &&
            'after:absolute after:inset-0 after:rounded-full after:border-2 after:border-primary-orange/50 after:animate-ping'
        )}
        size="icon"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageSquare className="h-5 w-5" />
        )}
      </Button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'fixed z-50',
              isMobile
                ? 'inset-x-0 bottom-0 mx-auto max-w-[100dvw] h-[80dvh]'
                : 'bottom-24 right-24 w-[350px]'
            )}
          >
            <Card
              className={cn(
                'border-primary-orange/20',
                isMobile && 'h-full rounded-b-none'
              )}
            >
              {/* Header */}
              <div className="p-4 border-b flex items-center justify-between bg-primary-orange/5">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary-orange" />
                  <h3 className="font-semibold">Virtual Assistant</h3>
                </div>
                {isMobile && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 rounded-full hover:bg-primary-orange/10"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close chat</span>
                  </Button>
                )}
              </div>

              {/* Messages */}
              <ScrollArea
                ref={scrollAreaRef}
                className={cn(
                  'p-4',
                  isMobile ? 'h-[calc(80dvh-8rem)]' : 'h-[400px]'
                )}
              >
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <p className="text-center text-muted-foreground text-sm">
                      👋 Hi! I'm your virtual assistant. Ask me anything about
                      Taufik!
                    </p>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          'flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm break-words',
                          message.role === 'user'
                            ? 'ml-auto bg-primary-orange text-white'
                            : 'bg-muted'
                        )}
                      >
                        <Markdown>{message.content}</Markdown>
                      </div>
                    ))
                  )}
                  {errorMsg && (
                    <div className="bg-red-100 text-red-600 p-2 rounded-lg text-sm">
                      {errorMsg}
                    </div>
                  )}
                  <div ref={messagesEndRef} /> {/* Scroll anchor */}
                </div>
              </ScrollArea>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask a question..."
                  className="flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  className="bg-primary-orange hover:bg-primary-orange-dark"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
