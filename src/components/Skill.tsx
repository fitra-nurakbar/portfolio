import styles from "@/styles/Skill.module.css";
import { faJs, faReact, faNodeJs, faGolang, faJava, faPhp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skill() {
  return (
    <section className={styles.container}>
      <h2>programming language expertise</h2>
      <p>
        I have <span>some skills</span> in the below <span>programming languages</span>.
      </p>
      <div className={styles.containerIcons}>
        <FontAwesomeIcon icon={faJs} className="hover:text-[#F7DF1E]" title="JavaScript" titleId="JavaScript-logo" />
        <FontAwesomeIcon icon={faReact} className="hover:text-[#61DAFB]" title="React" titleId="React-logo" />
        <FontAwesomeIcon icon={faNodeJs} className="hover:text-[#3C873A]" title="NodeJS" titleId="NodeJS-logo" />
        <FontAwesomeIcon icon={faPhp} className="hover:text-[#777BB4]" title="PHP" titleId="PHP-logo" />
        <FontAwesomeIcon icon={faJava} className="hover:text-[#007396]" title="Java" titleId="Java-logo" />
        <FontAwesomeIcon icon={faGolang} className="hover:text-[#00ADD8]" title="Golang" titleId="Golang-logo" />
      </div>
    </section>
  );
}
