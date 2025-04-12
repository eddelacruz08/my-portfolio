"use client";

import { motion } from 'framer-motion';
import { Building, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  details: string[];
  projects?: Array<{
    name: string;
    description: string;
  }>;
  delay: number;
}

const ExperienceItem = ({ company, position, period, details, projects, delay }: ExperienceItemProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-emerald-700">{position}</h3>
          <div className="flex items-center mt-1">
            <Building className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
            <span className="text-gray-600 dark:text-gray-400">{company}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
          <span className="text-gray-600 dark:text-gray-400 text-sm">{period}</span>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-2 w-1.5 h-1.5 bg-emerald-700 rounded-full mt-2"></div>
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {projects && projects.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Projects</h4>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-md">
                <h5 className="font-medium text-emerald-700">{project.name}</h5>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Multisys Technologies Corporation",
      position: "Software Engineer",
      period: "Oct 2024 - Present",
      details: [
        "Working remotely from Philippines",
        "Building modern web applications using React.js and Next.js",
        "Implementing responsive designs with Tailwind CSS and CSS3",
        "Using JavaScript (ES6+) for interactive features and application logic",
        "Consuming and managing API data with Axios and TanStack Query",
        "Collaborating with team members using Git and GitHub for version control",
        "Converting UI/UX designs from Figma into functional components"
      ],
      projects: []
    },
    {
      company: "MDI Novare Technologies Inc.",
      position: "Software Engineer & DevOps Engineer",
      period: "April 2022 - June 2024",
      details: [
        "Have been with the company for two years and 6 months.",
        "Proficient in repositories and documentations such as Confluence, Gitlab, Bitbucket, and Jira.",
        "Proficient in front-end frameworks such as ReactJS, Next JS, and Angular and API tools such as Postman.",
        "Proficient in Web Design using HTML, CSS, and JavaScript and templates such as Tailwind, Salesforce, and Bootstrap.",
        "Proficient in deployment using Gitlab Runners and Gitlab CI/CD pipelines in servers like AWS Cloud and virtual machine such as VMware."
      ],
      projects: [
        {
          name: "CBCI BAYAD Project",
          description: "As a front-end developer working with React.js in an agile development environment, my role primarily involved addressing fixed tickets assigned via Jira and creating comprehensive API documentation for every module."
        },
        {
          name: "Globe One MPC Project - DevOps Engineer",
          description: "As a DevOps engineer, my role focuses on automation. We create and maintain code to enable faster deployment in production. We use Terraform, Ansible, Packer, and GitLab CI/CD pipelines to automate applications. I have basic experience working with AWS, including EC2."
        },
        {
          name: "Globe Confluence Project in Globe",
          description: "Collaborated with the team as a Back-End Java Developer, assigned to develop a script that produces logs and converts them into a file for validation using Elastic Common Schema or ECS."
        },
        {
          name: "BDO Project",
          description: "I worked alongside the CJ UM Development Team in the role of a back-end java developer, contributing to the creation of a JSON script utilize for validating and testing API calls."
        }
      ]
    },
    {
      company: "Polytechnic University of the Philippines - Taguig Branch",
      position: "Junior Programmer Intern",
      period: "Apr 2020 – Jul 2021",
      details: [
        "Team Programmer",
        "System Web Designer and Database Designer",
        "Has 1 year experience development systems in PHP using CodeIgniter framework.",
        "Proficient in server side such as Hostinger, MySQL and XAMPP.",
        "Proficient in git repository like GitHub and command line extension using Git Bash.",
        "Proficient in Web Design such as JavaScript, HTML and CSS.",
        "Proficient in IDE such as VSCode, Notepad and Atom."
      ],
      projects: []
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-emerald-700 mx-auto mt-4"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-zinc-800"></div>
          
          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-emerald-700 border-4 border-white dark:border-zinc-900"></div>
                <div className="md:w-1/2 md:pl-12 md:pr-8 md:even:ml-auto md:even:pl-8 md:even:pr-12 md:odd:text-right md:even:text-left">
                  <ExperienceItem
                    company={exp.company}
                    position={exp.position}
                    period={exp.period}
                    details={exp.details}
                    projects={exp.projects}
                    delay={index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 