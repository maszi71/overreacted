import { POST_URL } from "../constants/url";
import { convertDate, createPostDate } from "../utils/date";
import { montserrat } from "../font";
import styles from "./page.module.scss";
import { REVALIDATE_TIME } from "../constants/revalidate";

async function getPostItem(id: string) {
  const res = await fetch(`${POST_URL}/${id}` , {
    next : {
      revalidate : REVALIDATE_TIME
    }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const post = await getPostItem(id);
  const date: Date = createPostDate(post.id);
  return (
    <main className={styles.main}>
      <h1 className={[montserrat.className, , styles.title].join(" ")}>{post.title}</h1>
      <p className={styles.date}>{convertDate(date)}</p>
      <p className={styles.desc}>{post.body}</p>
    </main>
  );
}
