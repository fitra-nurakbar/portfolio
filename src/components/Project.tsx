import Card from "@/components/Card";
import { Projects } from "@/utils/interface/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styles from "@/styles/Project.module.css";
import "swiper/css";

const project: Array<Projects> = [
  {
    id: 1,
    image: {
      alt: "Unity site",
      path: "/assets/project/",
      name: "unity-site.png",
    },
    title: "Unity site",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus non quia sequi vel ex officia facilis provident atque quibusdam id accusamus, asperiores quasi. Ipsam molestiae quas necessitatibus provident fuga.",
  },
  {
    id: 2,
    image: {
      alt: "L&P Project",
      path: "/assets/project/",
      name: "L&P.png",
    },
    title: "L&P site",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus non quia sequi vel ex officia facilis provident atque quibusdam id accusamus, asperiores quasi. Ipsam molestiae quas necessitatibus provident fuga.",
  },
];

export default function Project() {
  return (
    <section className={styles.container}>
      <h2>recent projects</h2>
      <p>
        I have skills in <span>web development</span> and have{" "}
        <span>worked on several projects</span> that went well.
      </p>
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {project.map((pro, index) => (
          <SwiperSlide key={index}>
            <Card image={pro.image} title={pro.title} description={pro.description} id={pro.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
