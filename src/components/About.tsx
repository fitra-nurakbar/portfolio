import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section className={styles.container}>
      <h2>about me</h2>
      <p>
        Hi, my <span>name</span> is <span>Fitra Nurakbar</span>.
      </p>
      <p>
        I'm a passionate <span>web developer</span> with a love for creating{" "}
        <span>beautiful</span> and <span>functional web apps </span>.
      </p>
      <p>
        I'm <span>always striving</span> to <span>improve my skills</span> and{" "}
        <span>new technologies</span> , with the goal of providing the best
        solutions for <span>my clients</span>.
      </p>
      <p>
        I have <span>experience working</span> with{" "}
        <span>various frameworks</span> and <span>languages</span>, including{" "}
        <span>NextJS</span>, <span>Gatsby</span>, and <span>Laravel</span>.
      </p>
      <p>
        <span>When</span> I'm not coding, I{" "}
        <span>enjoy playing the guitar</span>.
      </p>
      <p>
        <span>Please</span> take a look at <span>my portfolio</span> to see some
        of my <span>previous projects</span>, and feel free to{" "}
        <span>contact me</span> if you have any <span>questions</span> or would
        like to <span>discuss a potential collaboration</span>.
      </p>
    </section>
  );
}
