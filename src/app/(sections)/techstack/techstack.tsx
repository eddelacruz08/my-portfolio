"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Code, 
  FileBadge, 
  Server, 
  Database, 
  Monitor, 
  Figma as FigmaIcon, 
  Github, 
  Gitlab, 
  FileCode, 
  Paintbrush, 
  ArrowRightLeft, 
  Globe, 
  CornerDownRight, 
  Coffee,
  Layers,
  CheckCircle,
  FileCheck
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: string;
}

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const technologies: TechItem[] = [
    // Frontend
    { 
      name: 'React', 
      icon: <Code className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'A JavaScript library for building user interfaces',
      category: 'frontend'
    },
    { 
      name: 'Next.js', 
      icon: <FileBadge className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'React framework for production with hybrid static & server rendering',
      category: 'frontend'
    },
    { 
      name: 'JavaScript', 
      icon: <FileCode className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'High-level programming language for web development',
      category: 'frontend'
    },
    { 
      name: 'TypeScript', 
      icon: <FileBadge className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Strongly typed programming language that builds on JavaScript',
      category: 'frontend'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <Paintbrush className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Utility-first CSS framework for rapid UI development',
      category: 'frontend'
    },
    { 
      name: 'HTML5', 
      icon: <Globe className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Standard markup language for creating web pages',
      category: 'frontend'
    },
    { 
      name: 'CSS3', 
      icon: <Layers className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Style sheet language used for describing document presentation',
      category: 'frontend'
    },
    { 
      name: 'React Hook Form', 
      icon: <FileCheck className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Performant, flexible and extensible forms with easy-to-use validation',
      category: 'frontend'
    },
    { 
      name: 'React Geek Form', 
      icon: <FileCheck className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'A form management library for React applications',
      category: 'frontend'
    },
    { 
      name: 'Yup', 
      icon: <CheckCircle className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'JavaScript schema builder for value parsing and validation',
      category: 'tools'
    },
    { 
      name: 'Zod', 
      icon: <CheckCircle className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'TypeScript-first schema validation with static type inference',
      category: 'tools'
    },
    
    // Backend & Data
    { 
      name: 'Node.js', 
      icon: <Server className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'JavaScript runtime built on Chrome\'s V8 engine',
      category: 'backend'
    },
    { 
      name: 'MySQL', 
      icon: <Database className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Open-source relational database management system',
      category: 'backend'
    },
    { 
      name: 'PHP', 
      icon: <FileCode className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Server-side scripting language designed for web development',
      category: 'backend'
    },
    { 
      name: 'Java', 
      icon: <Coffee className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'High-level, class-based, object-oriented programming language',
      category: 'backend'
    },
    
    // Tools
    { 
      name: 'Git', 
      icon: <ArrowRightLeft className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Distributed version control system',
      category: 'tools'
    },
    { 
      name: 'GitHub', 
      icon: <Github className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Provider of Internet hosting for software development and version control',
      category: 'tools'
    },
    { 
      name: 'GitLab', 
      icon: <Gitlab className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Web-based DevOps lifecycle tool that provides a Git repository manager',
      category: 'tools'
    },
    { 
      name: 'VS Code', 
      icon: <Monitor className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Lightweight but powerful source code editor',
      category: 'tools'
    },
    { 
      name: 'Figma', 
      icon: <FigmaIcon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Cloud-based design and prototyping tool',
      category: 'tools'
    },
    { 
      name: 'Postman', 
      icon: <CornerDownRight className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'API platform for building and using APIs',
      category: 'tools'
    },
    { 
      name: 'Axios', 
      icon: <ArrowRightLeft className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Promise-based HTTP client for the browser and Node.js',
      category: 'tools'
    },
    { 
      name: 'TanStack Query', 
      icon: <Database className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />, 
      description: 'Powerful data fetching and state management library',
      category: 'tools'
    },
  ];
  
  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Utilities' },
  ];
  
  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="techstack" className="py-16 dark:bg-zinc-900 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Tech Stack
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
            Technologies and tools I use to bring products to life
          </motion.p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === category.id
                  ? 'bg-emerald-700 dark:bg-emerald-600 text-white'
                  : 'bg-gray-200 dark:bg-zinc-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-700'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Tech Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          viewport={{ once: true }}
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div 
                className="flex flex-col items-center p-4 dark:bg-zinc-800 bg-gray-200 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-32 justify-center"
              >
                <div className="mb-3">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center text-gray-800 dark:text-white">{tech.name}</span>
              </div>
              
              {/* Tooltip */}
              {hoveredTech === tech.name && (
                <div className="absolute z-10 w-48 p-3 -mt-2 text-sm bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-md shadow-lg text-gray-800 dark:text-white left-1/2 transform -translate-x-1/2 -translate-y-full top-0 border border-gray-200 dark:border-zinc-700">
                  <p>{tech.description}</p>
                  <div className="absolute w-3 h-3 bg-white dark:bg-zinc-800 transform rotate-45 left-1/2 -ml-1.5 top-full -mt-1.5 border-r border-b border-gray-200 dark:border-zinc-700"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Current Stack Highlight */}
        <motion.div
          className="mt-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400">Current Working Stack at Multisys Technologies</h3>
          <p className="text-gray-800 dark:text-white mb-4">
            These are the technologies I&apos;m actively using in my current role:
          </p>
          
          <ul className="space-y-3 text-gray-800 dark:text-white">
            <li className="flex items-start">
              <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
              <span>React.js and Next.js for building dynamic, component-based web applications</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
              <span>Tailwind CSS and CSS3 for styling responsive and mobile-first layouts</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
              <span>JavaScript (ES6+) for handling interactive features and logic</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
              <span>Axios and TanStack Query for fetching and managing data from APIs</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
              <span>Git and GitHub for version control and team collaboration</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
              <span>Visual Studio Code as my main code editor</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
              <span>Figma for understanding and converting UI/UX designs into functional components</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack; 