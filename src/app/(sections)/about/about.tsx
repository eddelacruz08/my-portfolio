"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-16 dark:bg-zinc-900 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-emerald-700 dark:bg-emerald-500 mx-auto mt-4"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero.jpg"
                alt="About Edmon Dela Cruz"
                fill
                className="object-cover object-center"
                style={{ objectPosition: "center 0%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400">
              Software Engineer with a passion for creating elegant solutions
            </h3>
            <div className="space-y-4 text-gray-800 dark:text-white">
              <p>
                Hello! I&apos;m Edmon, a software engineer based in the Philippines. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
              </p>
              <p>
                I have a solid background in software development with expertise in creating robust and scalable applications. I&apos;ve had the privilege of working at various companies, gaining valuable experience across different aspects of software engineering.
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with recently:
              </p>

              <div className="grid grid-cols-2 gap-2 max-w-md">
                {[
                  'JavaScript (ES6+)',
                  'TypeScript',
                  'React',
                  'Next.js',
                  'TailwindCSS',
                  'Node.js',
                  'Git',
                  'GitHub',
                  'GitLab',
                  'AWS', 
                  'VMWare'
                ].map((tech) => (
                  <div key={tech} className="flex items-center">
                    <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 dark:bg-emerald-500 rounded-full"></div>
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 