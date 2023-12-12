import { useCallback, useEffect, useRef, useState } from "react";
import { PostType } from "../types/PostType";

export const useInfiniteScroll = (
  list: PostType[],
  displayableItemCount: number
) => {
  const intialList =
    list?.length >= displayableItemCount - 1
      ? list.slice(0, displayableItemCount)
      : list;
  const observerReference = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(intialList || []);

  const addNewItems = useCallback(() => {
    setVisibleItems((previousItems) => [
      ...previousItems,
      ...list.slice(
        previousItems.length,
        previousItems.length + displayableItemCount
      ),
    ]);
  }, [displayableItemCount, list]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && visibleItems.length !== list.length) {
          addNewItems();
        }
      }
    });

    const currentObserver = observerReference.current;

    if (currentObserver) {
      observer.observe(currentObserver);
    }

    return () => {
      if (currentObserver) {
        observer.unobserve(currentObserver);
      }
    };
  }, [addNewItems, list.length, visibleItems]);

  return {
    observerReference,
    visibleItems,
  };
};
