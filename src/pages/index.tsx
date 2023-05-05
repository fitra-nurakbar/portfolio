import Layout from "@/components/Layout";
import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Skill from "@/components/home/Skill";
import RecentProject from "@/components/home/RecentProject";
import Contact from "@/components/home/Contact";
import Blog from "@/components/home/Blog";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <Banner />
      <About />
      <Skill />
      <Blog />
      <RecentProject />
      <Contact />
    </Layout>
  );
}
