import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Client from "@/components/Client";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <Hero />
      <About />
      <Skill />
      <Client />
      <Project />
      <Contact />
      <Footer />
    </Layout>
  );
}
