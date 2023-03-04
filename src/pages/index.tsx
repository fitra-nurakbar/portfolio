import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </Layout>
  );
}
