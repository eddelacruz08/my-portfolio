"use client";

import { Github, Linkedin, Mail, Twitter, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/constants/site';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col">
            <Link href="/" className="font-bold text-xl">
              Developer<span className="text-emerald-700">Portfolio</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              A showcase of my skills, projects, and experiences as a software engineer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <div className="mt-4 space-y-2">
              <Link href="/#about" className="block text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                About
              </Link>
              <Link href="/#skills" className="block text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                Skills
              </Link>
              <Link href="/#projects" className="block text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                Projects
              </Link>
              <Link href="/#contact" className="block text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:edmondelacruz110@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-500">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Edmon Dela Cruz. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 