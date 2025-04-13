"use client";

import { motion } from 'framer-motion';
import { Briefcase, CalendarDays } from 'lucide-react';

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
      className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 dark:border-zinc-800 p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">{position}</h3>
        <div className="flex items-center mt-1 text-emerald-600 dark:text-emerald-500">
          <Briefcase className="w-4 h-4 mr-1" />
          <span className="font-medium">{company}</span>
        </div>
        <div className="flex items-center mt-1 text-gray-800 dark:text-white/80">
          <CalendarDays className="w-4 h-4 mr-1" />
          <span>{period}</span>
        </div>
      </div>

      <div className="space-y-2 text-gray-800 dark:text-white">
        {details.map((detail, idx) => (
          <div key={idx} className="flex items-start">
            <div className="mr-2 mt-1.5 w-1.5 h-1.5 bg-emerald-700 dark:bg-emerald-500 rounded-full"></div>
            <p>{detail}</p>
          </div>
        ))}
      </div>

      {projects && projects.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Key Projects:</h4>
          <div className="space-y-2">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white/10 dark:bg-zinc-800/10 p-3 rounded">
                <div className="font-medium text-emerald-600 dark:text-emerald-500">{project.name}</div>
                <p className="text-gray-800 dark:text-white text-sm">{project.description}</p>
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
      period: "October 2024 - Present",
      details: [
        "Working remotely on multiple projects using modern front-end technologies",
        "Building dynamic, component-based web applications with React.js and Next.js",
        "Creating responsive and mobile-first layouts using Tailwind CSS and CSS3",
        "Implementing interactive features and logic with JavaScript (ES6+)",
        "Fetching and managing API data using Axios and TanStack Query",
        "Practicing version control and team collaboration with Git and GitHub",
        "Converting UI/UX designs from Figma into functional components"
      ]
    },
    {
      company: "MDI Novare Technologies Inc.",
      position: "Software Engineer & DevOps Engineer",
      period: "April 2022 - July 2024",
      details: [
        "Over two years and 6 months of experience in software development and DevOps engineering",
        "Proficient in repository management and documentation tools (Confluence, Gitlab, Bitbucket, Jira)",
        "Experienced in front-end frameworks including ReactJS, Next.js, and Angular and API tools like Postman",
        "Skilled in web design using HTML, CSS, JavaScript and frameworks such as Tailwind, Salesforce, and Bootstrap",
        "Proficient in deployment using Gitlab Runners and CI/CD pipelines on AWS Cloud and VMware"
      ],
      projects: [
        {
          name: "CBCI BAYAD Project",
          description: "As a front-end developer working with React.js in an agile environment, addressed fixed tickets assigned via Jira and created comprehensive API documentation for every module"
        },
        {
          name: "Globe One MPC Project",
          description: "As a DevOps engineer, focused on automation using Terraform, Ansible, Packer, and GitLab CI/CD pipelines. Gained experience with AWS, particularly EC2"
        },
        {
          name: "Globe Confluence Project",
          description: "Collaborated as a Back-End Java Developer to develop a script that produces logs and converts them into files for validation using Elastic Common Schema (ECS)"
        },
        {
          name: "BDO Project",
          description: "Worked with the CJ UM Development Team as a back-end Java developer to create JSON scripts for validating and testing API calls"
        }
      ]
    },
    {
      company: "Polytechnic University of the Philippines - Taguig Branch",
      position: "Junior Programmer Intern",
      period: "April 2020 - July 2021",
      details: [
        "Team Programmer with roles in system web design and database design",
        "One year of experience developing systems in PHP using CodeIgniter framework",
        "Proficient in server-side technologies including Hostinger, MySQL, and XAMPP",
        "Skilled in Git repository management using GitHub and Git Bash",
        "Experienced in web design using JavaScript, HTML, and CSS",
        "Proficient with IDEs such as VSCode, Notepad, and Atom"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 dark:bg-zinc-800 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-emerald-700 dark:text-emerald-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-emerald-700 dark:bg-emerald-500 mx-auto mt-4"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="relative z-10 space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-700 dark:bg-emerald-500 border-4 border-white dark:border-zinc-900"></div>
                  
                  {/* Mobile view (stacked) */}
                  <div className="md:hidden pl-8 relative">
                    <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-emerald-700 dark:bg-emerald-500 border-4 border-white dark:border-zinc-900"></div>
                    <ExperienceItem
                      company={exp.company}
                      position={exp.position}
                      period={exp.period}
                      details={exp.details}
                      projects={exp.projects}
                      delay={index}
                    />
                  </div>
                  
                  {/* Desktop view (alternating) */}
                  <div className={`hidden md:block ${isEven ? 'md:ml-auto md:pl-12 md:pr-20 text-left' : 'md:mr-auto md:pl-20 md:pr-12 text-left'}`} style={{ width: '50%' }}>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 