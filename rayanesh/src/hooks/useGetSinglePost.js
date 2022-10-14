import {useQuery} from "@tanstack/react-query";
import {fetchPostById} from "../api/posts";

function useGetSinglePost({postId, isEnable}) {
    const {
        data: post,
        status: postStatus,
    } = useQuery({
        queryKey: ['getSinglePost', postId],
        queryFn: () => fetchPostById({postId}),
        options: {
            enabled: isEnable
        }
 
    }
   )
    return {post, postStatus}
}


export default useGetSinglePost;