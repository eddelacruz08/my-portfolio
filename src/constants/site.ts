import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Edmon Dela Cruz | Software Engineer",
  description:
    "Portfolio website of Edmon Dela Cruz, a software engineer specializing in building exceptional digital experiences.",
  url: "https://edmon-delacruz-portfolio.com",
  ogImage: "/images/og-image.jpg",
  links: {
    github: "https://github.com/eddelacruz08",
    linkedin: "https://www.linkedin.com/in/edmon-dela-cruz-908090235",
    twitter: "https://x.com/Papsie_e",
    facebook: "https://www.facebook.com/EDMDelaCruz",
    instagram: "https://www.instagram.com/edmon.dela.cruz/",
  },
};

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]; 