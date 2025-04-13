"use client";

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Next.js Portfolio",
      description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS with dark mode support and custom animations.",
      image: "/images/projects/project.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/eddelacruz08/portfolio",
      liveUrl: "https://edmondelacruz.vercel.app"
    },
    {
      title: "CBCI BAYAD Project",
      description: "Front-end development with React.js in an agile environment, addressing tickets via Jira and creating comprehensive API documentation for all modules.",
      image: "/images/projects/project.jpg",
      tags: ["React.js", "Jira", "API Documentation", "Agile"],
      company: "MDI Novare"
    },
    {
      title: "Globe One MPC Project",
      description: "DevOps automation using Terraform, Ansible, Packer, and GitLab CI/CD pipelines, with AWS EC2 integration to enable faster deployment in production.",
      image: "/images/projects/project.jpg",
      tags: ["DevOps", "AWS", "Terraform", "Ansible", "GitLab CI/CD"],
      company: "MDI Novare"
    },
    {
      title: "Globe Confluence Project",
      description: "Back-end Java development to create scripts that produce logs and convert them into files for validation using Elastic Common Schema (ECS).",
      image: "/images/projects/project.jpg",
      tags: ["Java", "ECS", "Back-End", "Logging"],
      company: "MDI Novare"
    },
    {
      title: "BDO Project",
      description: "Back-end Java development with the CJ UM Development Team to create JSON scripts for validating and testing API calls.",
      image: "/images/projects/project.jpg",
      tags: ["Java", "JSON", "API Testing", "Back-End"],
      company: "MDI Novare"
    },
    {
      title: "React Web Application",
      description: "Modern web application built with React.js and Next.js, featuring responsive layouts with Tailwind CSS and data management with TanStack Query.",
      image: "/images/projects/project.jpg",
      tags: ["React.js", "Next.js", "Tailwind CSS", "TanStack Query"],
      company: "Multisys"
    }
  ];

  return (
    <section id="projects" className="py-16 dark:bg-zinc-800 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Projects
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
            Showcasing key projects from my professional experience across different companies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/eddelacruz08"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md text-gray-800 dark:text-white font-medium hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-700 dark:hover:border-emerald-400 transition-colors"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 