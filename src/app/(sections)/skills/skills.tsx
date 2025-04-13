"use client";

import { motion } from 'framer-motion';
import { Code, Server, Layout, Database, Globe, Terminal } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const SkillCard = ({ title, description, icon, delay }: SkillCardProps) => {
  return (
    <motion.div
      className="dark:bg-zinc-800 bg-gray-200 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="text-emerald-700 dark:text-emerald-400 rounded-full w-12 h-12 flex items-center justify-center bg-emerald-100/80 dark:bg-emerald-900/20 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-emerald-700 dark:text-emerald-400">{title}</h3>
      <p className="text-gray-800 dark:text-white">{description}</p>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS techniques.',
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications using Node.js, Express, and other backend frameworks.',
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: 'Database Design',
      description: 'Designing and implementing database schemas, with experience in MongoDB, PostgreSQL, and MySQL.',
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: 'API Development',
      description: 'Building RESTful APIs and GraphQL endpoints for seamless client-server communication.',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'Programming Languages',
      description: 'Proficient in JavaScript/TypeScript, with experience in Python, Java, and C++.',
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: 'DevOps & Deployment',
      description: 'Experience with CI/CD pipelines, Docker, and cloud platforms like AWS and Vercel.',
      icon: <Terminal className="w-6 h-6" />,
    },
  ];

  return (
    <section id="skills" className="py-16 dark:bg-zinc-900 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-emerald-700 dark:bg-emerald-500 mx-auto mt-4"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="mt-4 text-lg text-gray-800 dark:text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Here are some of the technologies and skills I&apos;ve gained throughout my career.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 