import styles from "@/styles/Skill.module.css";
import {
  faJs,
  faReact,
  faNodeJs,
  faGolang,
  faJava,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Skill() {
  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (isElementInViewport(element)) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (element: any) => {
    const rect = element.getBoundingClientRect();

    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  return (
    <section className={styles.container}>
      <h2>programming language expertise</h2>
      <p>
        I have <span>some skills</span> in the below{" "}
        <span>programming languages</span>.
      </p>
      <div ref={containerRef} className={styles.containerIcons}>
        <FontAwesomeIcon
          icon={faJs}
          className={`${animate && "animate-spinning"} hover:text-[#F7DF1E]`}
          title="JavaScript"
          titleId="JavaScript-logo"
        />
        <FontAwesomeIcon
          icon={faReact}
          className={`${animate && "animate-spinning"} hover:text-[#61DAFB]`}
          title="ReactJS"
          titleId="ReactJS-logo"
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          className={`${animate && "animate-spinning"} hover:text-[#3C873A]`}
          title="NodeJS"
          titleId="NodeJS-logo"
        />
        <FontAwesomeIcon
          icon={faPhp}
          className={`${animate && "animate-spinning"} hover:text-[#777BB4]`}
          title="PHP"
          titleId="PHP-logo"
        />
        <FontAwesomeIcon
          icon={faJava}
          className={`${animate && "animate-spinning"} hover:text-[#007396]`}
          title="Java"
          titleId="Java-logo"
        />
        <FontAwesomeIcon
          icon={faGolang}
          className={`${animate && "animate-spinning"} hover:text-[#00ADD8]`}
          title="Golang"
          titleId="Golang-logo"
        />
      </div>
    </section>
  );
}
