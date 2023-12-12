"use client";
import styles from "./item.module.scss";
import { montserrat } from "../../font";
import Link from "next/link";
import { truncateDescription } from "../../utils/truncate";
import { FC } from "react";
import { PostType } from "@/app/types/PostType";
import { useItem } from "./item.hook";

type ItemType = {
  total: number;
  index: number;
  item: PostType;
};

const Item: FC<ItemType> = ({ index, total, item }) => {
  const { color, size } = useItem(index, total);

  return (
    <Link className={styles.link} href={`/${encodeURIComponent(item.id)}`}>
      <h2
        style={{ color: color }}
        className={[montserrat.className, , styles.title].join(" ")}
      >
        {item.title}
      </h2>
      <p className={styles.text}>{item.date}</p>
      <p className={styles["mt-1"]}>{truncateDescription(item.body, size)}</p>
    </Link>
  );
};

export default Item;
