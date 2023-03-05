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
      alt: "Project satu",
      path: "/assets/",
      name: "L&P.png",
    },
    description: "Image satu",
  },
  {
    id: 2,
    image: {
      alt: "Project satu",
      path: "/assets/",
      name: "L&P.png",
    },
    description: "Image dua",
  },
  {
    id: 3,
    image: {
      alt: "Project satu",
      path: "/assets/",
      name: "L&P.png",
    },
    description: "Image tiga",
  },
  {
    id: 4,
    image: {
      alt: "Project satu",
      path: "/assets/",
      name: "L&P.png",
    },
    description: "Image tiga",
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {project.map((pro, index) => (
          <SwiperSlide key={index}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
