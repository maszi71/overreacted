import styles from "./page.module.scss";
import { convertDate, createPostDate } from "./utils/date";
import { PostType } from "./types/PostType";
import PostList from "./components/PostList/PostList";
import { POST_URL } from "./constants/url";
import { REVALIDATE_TIME } from "./constants/revalidate";

async function getPostList() {
  const res = await fetch(POST_URL , {
    next : {
      revalidate : REVALIDATE_TIME
    }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const postList = await getPostList();
  const updatedPostList: PostType[] = postList.map((post: PostType) => {
    const date = createPostDate(post.id);
    return { ...post, date: convertDate(date) };
  });

  return (
    <main className={styles.main}>
      <PostList list={updatedPostList} />
    </main>
  );
}
