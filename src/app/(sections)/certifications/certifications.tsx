"use client";

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  delay: number;
}

const CertificationCard = ({ title, issuer, date, description, delay }: CertificationCardProps) => {
  return (
    <motion.div
      className=" dark:bg-zinc-800 bg-gray-200 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <Award className="h-5 w-5 text-emerald-700 dark:text-emerald-400 mr-2" />
        <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">{title}</h3>
      </div>
      <div className="mb-3">
        <p className="text-sm text-gray-800 dark:text-white">
          <span className="font-medium text-emerald-600 dark:text-emerald-500">{issuer}</span> • {date}
        </p>
      </div>
      <p className="text-gray-800 dark:text-white">{description}</p>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 dark:bg-zinc-900 bg-gray-50 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Certifications & Awards
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-emerald-700 dark:bg-emerald-500 mx-auto mt-4"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertificationCard
            title="AWS Certified Cloud Practitioner"
            issuer="Amazon Web Services"
            date="February 2023"
            description="Foundational understanding of AWS Cloud services, global infrastructure, security, and compliance."
            delay={0}
          />
          <CertificationCard
            title="Professional Scrum Master I"
            issuer="Scrum.org"
            date="June 2023"
            description="Demonstrated knowledge of Scrum framework and ability to apply Scrum in real-world scenarios."
            delay={1}
          />
          <CertificationCard
            title="JavaScript Algorithms and Data Structures"
            issuer="freeCodeCamp"
            date="March 2022"
            description="Proficiency in JavaScript fundamentals, ES6, regular expressions, debugging, data structures, and algorithm scripting."
            delay={2}
          />
          <CertificationCard
            title="Full Stack Web Development"
            issuer="Udemy"
            date="January 2022"
            description="Comprehensive training in HTML, CSS, JavaScript, React, Node.js, and MongoDB for end-to-end web application development."
            delay={3}
          />
          <CertificationCard
            title="Responsive Web Design"
            issuer="freeCodeCamp"
            date="October 2021"
            description="Mastery in creating responsive web designs using HTML, CSS, Flexbox, CSS Grid, and media queries."
            delay={4}
          />
          <CertificationCard
            title="Introduction to DevOps"
            issuer="LinkedIn Learning"
            date="August 2023"
            description="Understanding of DevOps principles, practices, and tools for continuous integration and deployment."
            delay={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications; 