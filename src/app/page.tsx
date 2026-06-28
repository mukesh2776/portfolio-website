import { Navbar, ScrollProgress } from "@/components/layout";
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  LeetCode,
  FlickLeadership,
  Services,
  WhyHireMe,
  Process,
  Testimonials,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <LeetCode />
      <FlickLeadership />
      <Services />
      <WhyHireMe />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
