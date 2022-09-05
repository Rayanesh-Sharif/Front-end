import {useQuery} from "@tanstack/react-query";
import {fetchRecentBlogs} from "../api/posts";


function useGetRecentPosts() {
    const {data: recentPosts, status: recentPostsStatus} = useQuery(
        ['recentPosts'],
        fetchRecentBlogs
    )
    return {recentPosts, recentPostsStatus}
}

export default useGetRecentPosts;