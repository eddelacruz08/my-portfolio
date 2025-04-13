"use client";

import { motion } from 'framer-motion';
import { Code, Users, Target, Brain } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay: number;
}

const SkillCard = ({ title, skills, icon, delay }: SkillCardProps) => {
  return (
    <motion.div
      className="dark:bg-zinc-900 bg-gray-200 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-semibold ml-2 text-emerald-700 dark:text-emerald-400">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-2 mt-1 w-1.5 h-1.5 bg-emerald-700 dark:bg-emerald-500 rounded-full"></div>
            <span className="text-gray-800 dark:text-white">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Expertise = () => {
  const skillCategories = [
    {
      title: "Technical Development",
      icon: <Code className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />,
      skills: [
        "Full-stack web development",
        "Responsive design implementation",
        "API integration & development",
        "Database design & optimization"
      ]
    },
    {
      title: "Collaboration",
      icon: <Users className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />,
      skills: [
        "Team leadership & mentoring",
        "Agile & Scrum methodologies",
        "Cross-functional collaboration",
        "Code reviews & pair programming"
      ]
    },
    {
      title: "Strategic Planning",
      icon: <Target className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />,
      skills: [
        "Project scoping & estimation",
        "Tech stack evaluation",
        "System architecture design",
        "Performance optimization"
      ]
    },
    {
      title: "Problem Solving",
      icon: <Brain className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />,
      skills: [
        "Critical thinking & analysis",
        "Debugging & troubleshooting",
        "Innovative solution creation",
        "Technical research"
      ]
    }
  ];

  return (
    <section id="expertise" className="py-16 dark:bg-zinc-800 bg-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Competencies
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
            My technical and non-technical capabilities that enable me to deliver quality solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise; 