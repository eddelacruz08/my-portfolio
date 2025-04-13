"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink, Building } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  company?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  company,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`overflow-hidden rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {company && (
          <div className="absolute top-0 right-0 m-2 bg-emerald-700/90 text-white text-xs font-medium px-2 py-1 rounded">
            <div className="flex items-center">
              <Building className="h-3 w-3 mr-1 text-white" />
              <span>{company}</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400">{title}</h3>
            <p className="mt-2 text-gray-800 dark:text-white">{description}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-6">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-800 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5 mr-2 text-emerald-700 dark:text-emerald-400" />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-800 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400"
              aria-label="View Live Demo"
            >
              <ExternalLink className="w-5 h-5 mr-2 text-emerald-700 dark:text-emerald-400" />
              <span className="text-sm">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 