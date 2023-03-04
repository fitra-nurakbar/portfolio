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

export default function Skill() {
  return (
    <section className={styles.container}>
      <h2>my programming language expertise</h2>
      <p>
        <span>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit.
      </p>
      <div className={styles.containerIcons}>
        <FontAwesomeIcon
          icon={faJs}
          className="hover:text-[#F7DF1E]"
          title="JavaScript"
        />
        <FontAwesomeIcon
          icon={faReact}
          className="hover:text-[#61DAFB]"
          title="ReactJS"
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          className="hover:text-[#3C873A]"
          title="NodeJS"
        />
        <FontAwesomeIcon
          icon={faPhp}
          className="hover:text-[#777BB4]"
          title="PHP"
        />
        <FontAwesomeIcon
          icon={faJava}
          className="hover:text-[#007396]"
          title="Java"
        />
        <FontAwesomeIcon
          icon={faGolang}
          className="hover:text-[#00ADD8]"
          title="Golang"
        />
      </div>
    </section>
  );
}
