"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-emerald-700 mx-auto mt-4"
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
                src="/images/about.jpg"
                alt="About Edmon Dela Cruz"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Software Engineer with a passion for creating elegant solutions
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
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
                  'Node.js',
                  'GraphQL',
                  'TailwindCSS',
                  'AWS'
                ].map((tech) => (
                  <div key={tech} className="flex items-center">
                    <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full"></div>
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <GraduationCap className="h-6 w-6 text-emerald-700 mr-2" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
              <h4 className="font-semibold text-lg">Bachelor of Science in Information Technology</h4>
              <p className="text-emerald-700 font-medium">PUP - Taguig Branch</p>
              <p className="text-gray-600 dark:text-gray-400">2018 - 2021</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
              <h4 className="font-semibold text-lg">Diploma in Information Communication Technology</h4>
              <p className="text-emerald-700 font-medium">PUP - Taguig Branch</p>
              <p className="text-gray-600 dark:text-gray-400">2021 - 2023</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-emerald-700 mr-2" />
            <h3 className="text-2xl font-semibold">Trainings & Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
                  <span>Bootcamp Training - MDI Novare Inc.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
                  <span>NIFI Training - Ingestion Squad</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
                  <span>ReactJS Training - Udemy Certification</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
                  <span>Conflict Resolution and Escalation Management</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
                  <span>Continuous Integration and Continuous Delivery with GitLab - LinkedIn Learning</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
                  <span>Introduction to VMware - LinkedIn Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 