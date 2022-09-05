import {useQuery} from "@tanstack/react-query";
import {fetchPopularPosts} from "../api/posts";

function useGetPopularPosts() {
    const {data: popularPosts, status: popularPostsStatus} = useQuery(
        ['popularPosts'],
        fetchPopularPosts
    )
    return {popularPosts, popularPostsStatus}
}

export default useGetPopularPosts;