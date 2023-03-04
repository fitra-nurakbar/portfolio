import Card from "@/components/Card";
import { Projects } from "@/utils/interface/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import styles from "@/styles/Project.module.css";
import "swiper/css";
import "swiper/css/pagination";

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
      <h2>my recent projects</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, corrupti?</p>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
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
