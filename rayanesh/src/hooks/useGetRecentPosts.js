import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchRecentBlogs } from "../api/posts";

function useGetRecentPosts(page) {
  const {
    data: recentPosts,
    status: recentPostsStatus,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["recentPosts"], fetchRecentBlogs, {
    getNextPageParam: () => page,
  });
  return {
    recentPosts,
    recentPostsStatus,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
}

export default useGetRecentPosts;
