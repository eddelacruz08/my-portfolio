export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
  };
} 