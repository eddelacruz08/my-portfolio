"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden dark:bg-zinc-900 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-emerald-700 font-bold text-2xl">Hello, I&apos;m</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight dark:text-white text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Edmon Dela Cruz
            </motion.h1>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 !text-gray-600 dark:!text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Software Engineer
            </motion.h2>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 dark:text-white max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              I&apos;m a software engineer specializing in building exceptional digital experiences.
              Currently, I&apos;m focused on building accessible, human-centered products.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link href="#projects" 
                className="px-6 py-3 rounded-md bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors"
              >
                View Projects
              </Link>
              <Link href="#contact" 
                className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="Edmon Dela Cruz"
              fill
              priority
              className="object-cover object-center"
              style={{ objectPosition: "center 0%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <Link href="#profile" className="flex flex-col items-center text-gray-500 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-500">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="mt-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 