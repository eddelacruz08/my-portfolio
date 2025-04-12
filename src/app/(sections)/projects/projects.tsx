"use client";

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'CBCI BAYAD Project',
      description: 'As a front-end developer using React.js in an agile development environment, I addressed tickets assigned via Jira and created comprehensive API documentation for every module. The project focused on building a user-friendly payment platform with responsive interfaces.',
      tags: ['React.js', 'Jira', 'API Documentation', 'Agile', 'Frontend Development'],
      image: '/images/projects/project.jpg',
      githubUrl: 'https://github.com/eddelacruz08',
      company: 'MDI Novare Technologies Inc.'
    },
    {
      title: 'Globe One MPC Project',
      description: 'Working as a DevOps engineer, I focused on automation to enable faster deployment in production. Implemented CI/CD pipelines with multiple tools like Terraform for infrastructure as code, Ansible for configuration management, and Packer for image building. Gained hands-on experience with AWS EC2 instances.',
      tags: ['DevOps', 'Terraform', 'Ansible', 'Packer', 'GitLab CI/CD', 'AWS', 'EC2'],
      image: '/images/projects/project.jpg',
      githubUrl: 'https://github.com/eddelacruz08',
      company: 'MDI Novare Technologies Inc.'
    },
    {
      title: 'Globe Confluence Project',
      description: 'Collaborated with a team as a Back-End Java Developer to develop a script that produces logs and converts them into a validation file using Elastic Common Schema (ECS). The solution streamlined log management and analysis for application monitoring.',
      tags: ['Java', 'Backend Development', 'Elastic Common Schema', 'Log Processing'],
      image: '/images/projects/project.jpg',
      githubUrl: 'https://github.com/eddelacruz08',
      company: 'MDI Novare Technologies Inc.'
    },
    {
      title: 'BDO Project',
      description: 'Working alongside the CJ UM Development Team as a back-end Java developer, I contributed to creating a JSON script utilized for validating and testing API calls. The implementation improved testing efficiency and API reliability for banking operations.',
      tags: ['Java', 'JSON', 'API Testing', 'Backend Development'],
      image: '/images/projects/project.jpg',
      githubUrl: 'https://github.com/eddelacruz08',
      company: 'MDI Novare Technologies Inc.'
    },
    {
      title: 'Modern Web Applications',
      description: 'Building responsive web applications using React.js and Next.js with Tailwind CSS. These projects focus on modern UI/UX principles with efficient data management using Axios and TanStack Query for API integration.',
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Axios', 'TanStack Query'],
      image: '/images/projects/project.jpg',
      githubUrl: 'https://github.com/eddelacruz08',
      company: 'Multisys Technologies Corporation'
    },
    {
      title: 'PHP CodeIgniter System',
      description: 'Developed web-based systems using PHP with the CodeIgniter framework during my internship. The project involved database design with MySQL, server deployment with Hostinger and XAMPP, and version control using GitHub and Git Bash.',
      tags: ['PHP', 'CodeIgniter', 'MySQL', 'Hostinger', 'XAMPP', 'GitHub'],
      image: '/images/projects/project.jpg',
      githubUrl: 'https://github.com/eddelacruz08',
      company: 'PUP - Taguig Branch'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Projects
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
            Showcasing key projects from my professional experience across different companies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                githubUrl={project.githubUrl}
                company={project.company}
              />
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
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 