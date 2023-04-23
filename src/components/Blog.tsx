import styles from "@/styles/Blog.module.css";
import Link from "next/link";

export default function Blog() {
  return (
    <section className={styles.container}>
      <h2>Blog</h2>
      <p>
        In my <span>spare time</span>, I <span>sometimes</span> share <span>experiences</span> in a post.
      </p>
      <Link href={"/posts"}>Recent posts</Link>
    </section>
  );
}
