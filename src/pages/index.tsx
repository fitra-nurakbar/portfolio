import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <Banner />
      <About />
      <Skill />
      <Blog />
      <Project />
      <Contact />
    </Layout>
  );
}
