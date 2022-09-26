import {Container} from "@mui/material";
import RichTextEditor from "../../components/general/RichTextEditor";
import {useParams} from "react-router-dom"
import useGetSinglePost from "../../hooks/useGetSinglePost";
import useGetSingleUser from "../../hooks/useGetSingleUser";

function ReadBlog() {
    let params = useParams();
    const id = params.id;
    //fetch post
    const {post, postStatus} = useGetSinglePost({postId:id});
    const isEnable = postStatus === "success" && post !== null;
    const {user, userStatus} = useGetSingleUser({userId: post?.user_id, isEnable: isEnable});
    if (isEnable && userStatus === "success") {
        return (
            <Container>
                <RichTextEditor data={post.data} isReadOnly={true} id={id}/>
            </Container>

        )
    }
}

export default ReadBlog;