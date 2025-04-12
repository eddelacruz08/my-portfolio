"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-emerald-700 font-semibold">Hi, my name is</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Edmon Dela Cruz
          </motion.h1>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Software Engineer
          </motion.h2>
          
          <motion.p 
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
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
              className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Right Content - Profile Image */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-emerald-700">
            <Image 
              src="/images/hero.jpg" 
              alt="Edmon Dela Cruz" 
              fill
              className="object-cover object-center"
              style={{ objectPosition: "center 0%" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 