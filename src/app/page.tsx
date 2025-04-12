import Hero from '@/app/(sections)/hero/hero';
import About from '@/app/(sections)/about/about';
import Skills from '@/app/(sections)/skills/skills';
import Projects from '@/app/(sections)/projects/projects';
import Contact from '@/app/(sections)/contact/contact';
import Profile from '@/app/(sections)/profile/profile';
import Experience from '@/app/(sections)/experience/experience';
import Expertise from '@/app/(sections)/expertise/expertise';
import TechStack from '@/app/(sections)/techstack/techstack';

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <About />
      <Experience />
      <TechStack />
      <Expertise />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
