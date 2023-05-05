import Image from "next/image";
import { inter, poppins } from "@/utils/fonts";
import styles from "@/styles/Banner.module.css";
import { useEffect, useState } from "react";

interface TypeComment {
  tagline: string
}

export default function Banner() {
  const [comment, setComment] = useState<TypeComment[]>([])
  const [commentNow, setCommentNow] = useState<number>(0)

  const getComment = () => {
    const test = [
      {
        tagline: "1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio quisquam iure deserunt provident."
      },
      {
        tagline: "2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio quisquam iure."
      },
      {
        tagline: "3.Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ]

    try{
      setComment(test)
    } catch(err) {
      console.log(err)
    }
  }

  const handleNextInfo = () => {
    comment.length -1 != commentNow ? setCommentNow(commentNow + 1) : setCommentNow(0)  
  }

  useEffect(() => {
    getComment()
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.pacman}></div>
      <div className={styles.detail}>
        <h1 className={poppins.className}>
          Hello There<span className={styles.wave}>👋</span>
        </h1>
        <q>
          {/* I&apos;am <span>Fitra Nurakbar</span>, And I&apos;am a{" "}
          <span>software developer</span> with proven experience in creating and{" "}
          <span>designing software</span>. */}
          {comment.length > 0 ? comment[commentNow].tagline : null}
        </q>
        <button onClick={handleNextInfo}>
          Next
        </button>
      </div>
      <Image
        src={"/assets/photo-profile.png"}
        width={150}
        height={150}
        alt="Fitra Nurakbar"
        priority
      />
    </section>
  );
}
