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
      className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="text-emerald-700 rounded-full w-12 h-12 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Expertise = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Proficiency in PHP, JavaScript, Java",
        "Experience with TypeScript",
        "Understanding of C++, Python basics"
      ]
    },
    {
      title: "Web Development",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "Experience with HTML, CSS, and JavaScript",
        "Proficient in ReactJS, NextJS, and Angular",
        "Familiar with Tailwind CSS, Bootstrap, and Salesforce templates"
      ]
    },
    {
      title: "Back-end & DevOps",
      icon: <Target className="w-6 h-6" />,
      skills: [
        "Knowledge of Node.js and PHP",
        "Experience with MySQL database design",
        "Deployment using GitLab CI/CD, AWS Cloud",
        "Version control with Git, GitHub, GitLab, Bitbucket"
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        "Goal-oriented approach to projects",
        "Strong team player",
        "Can work with minimum supervision",
        "Adaptable to new technologies and environments",
        "Problem-solving skills"
      ]
    }
  ];

  return (
    <section id="expertise" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Competencies
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-emerald-700 mx-auto mt-4"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
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