import {useInfiniteQuery} from "@tanstack/react-query";
import {fetchRecentBlogs} from "../api/posts";

function useGetRecentPosts(page) {
    console.log('page number in hook is :', page);
    const {
        data: recentPosts,
        status: recentPostsStatus,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey:["recentPosts"],
        queryFn:fetchRecentBlogs,
        getNextPageParam: () => page + 1,
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
