"use client";
import { FC } from "react";
import Item from "../Item/item";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { PostType } from "../../types/PostType";

type PostListType = {
  list: PostType[];
};

const PostList: FC<PostListType> = (props) => {
  const { list } = props;
  const { observerReference, visibleItems } = useInfiniteScroll(list, 10);

  return (
    <>
      {visibleItems.map((post: PostType, index: number) => (
        <Item key={post.id} item={post} index={index} total={list.length} />
      ))}
      <div style={{ height: "2.5rem" }} ref={observerReference} />
    </>
  );
};

export default PostList;
