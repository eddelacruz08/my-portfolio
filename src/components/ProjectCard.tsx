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
      className="overflow-hidden rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-md h-full"
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
              <Building className="h-3 w-3 mr-1" />
              <span>{company}</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500"
            >
              <Github className="mr-1 h-4 w-4" />
              <span>Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-500"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 