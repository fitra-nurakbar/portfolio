import Layout from "@/components/Layout";
import Card from "@/components/Card"
import styles from "@/styles/Post.module.css";

interface PostsProps {
  data: {
    posts: any[];
  };
}

export default function Posts({ data: { posts } }: PostsProps) {

  return (
    <Layout title="Posts">
      {/* <h1 className={styles.message}>Coming soon...</h1> */}
      <section>
        <h2>Posts</h2>
        {posts.map((post, index) => (
            <Card key={index} title={post.title} description={post.content} id={0} />
        ))}
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/post`);
  const data = await res.json();

  return { props: { data } };
}
