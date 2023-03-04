import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
