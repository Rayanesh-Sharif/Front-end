import {useQuery} from "@tanstack/react-query";
import {fetchPostById} from "../api/posts";

function useGetSinglePost({postId}) {
    const {
        data: post,
        status: postStatus,
    } = useQuery(
        ['getSinglePost', postId],
        () => fetchPostById({postId}),
    )
    return {post, postStatus}
}


export default useGetSinglePost;