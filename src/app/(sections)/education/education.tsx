"use client";

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 dark:bg-zinc-800 bg-gray-200 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-emerald-700 dark:bg-emerald-500 mx-auto mt-4"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <motion.div
          className="mt-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6 justify-center md:justify-start">
            <GraduationCap className="h-6 w-6 text-emerald-700 dark:text-emerald-400 mr-2" />
            <h3 className="text-2xl font-semibold text-emerald-700 dark:text-emerald-400">Academic Background</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 dark:bg-zinc-800/80 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
              <h4 className="font-semibold text-lg text-emerald-700 dark:text-emerald-400">Bachelor of Science in Information Technology</h4>
              <p className="text-emerald-600 dark:text-emerald-500 font-medium">PUP - Taguig Branch</p>
              <p className="text-gray-800 dark:text-white">2021 - 2023</p>
            </div>
            <div className="bg-white/80 dark:bg-zinc-800/80 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800">
              <h4 className="font-semibold text-lg text-emerald-700 dark:text-emerald-400">Diploma in Information Communication Technology</h4>
              <p className="text-emerald-600 dark:text-emerald-500 font-medium">PUP - Taguig Branch</p>
              <p className="text-gray-800 dark:text-white">2018 - 2021</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 