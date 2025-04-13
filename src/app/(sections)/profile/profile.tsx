"use client";

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Profile = () => {
  return (
    <section id="profile" className="py-16 dark:bg-zinc-800 bg-gray-200 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Profile Overview
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
          className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <User className="h-8 w-8 text-emerald-700 dark:text-emerald-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400">Professional Summary</h3>
              <div className="text-gray-800 dark:text-white text-lg leading-relaxed space-y-4">
                <p>
                  Hi! I&apos;m a Software Engineer with a passion for building high-performance, user-friendly websites and applications. I specialize in full-stack development using technologies such as React.js, Next.js, Node.js, and MySQL, enabling me to deliver seamless experiences from front to back.
                </p>
                <p>
                  Driven by curiosity and a continuous desire to improve, I enjoy exploring new tools, frameworks, and methodologies that enhance both development workflows and user outcomes. I value writing clean, maintainable code and collaborating with others to bring ideas to life through meaningful and efficient software solutions.
                </p>
                <p>
                  I believe that effective communication and strong collaboration are just as vital as technical expertise. I&apos;m always open to new challenges, excited to learn, and eager to contribute to impactful projects.
                </p>
                <p>
                  Let&apos;s connect—I&apos;d love to chat about technology, problem-solving, or opportunities to collaborate!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile; 