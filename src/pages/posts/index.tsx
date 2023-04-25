import Layout from "@/components/Layout";
import Card from "@/components/Card";
import styles from "@/styles/Post.module.css";

interface PostsProps {
  data: {
    posts: any[];
    error?: string;
  };
}

export default function Posts({ data: { posts, error } }: PostsProps) {
  return (
    <Layout title="Posts">
      <section className={styles.container}>
        <h2>All Posts</h2>
        <div className={styles.wrapper}>
          {error ? (
            <h3 className={styles.message}>Failed to load data</h3>
          ) : (
            posts.map((post, index) => (
              <Card
                key={index}
                title={post.title}
                description={post.content}
                id={0}
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/post`);
    const data = await res.json();

    return { props: { data } };
  } catch (error: any) {
    return {
      props: { data: { posts: [], error: error.message as string } as object },
    };
  }
}
