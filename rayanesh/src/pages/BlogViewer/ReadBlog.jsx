import {Container} from "@mui/material";
import {initEditor, removeDuplicatedDiv} from "../../components/general/richTextEditor";
import {useParams} from "react-router-dom";
import useGetSinglePost from "../../hooks/useGetSinglePost";
import useGetSingleUser from "../../hooks/useGetSingleUser";
import Page from "../../components/general/Page";
import {useEffect} from "react";

function ReadBlog() {
    let params = useParams();
    const id = params.id;
    const {post, postStatus} = useGetSinglePost({postId: id});
    let isEnable;
    isEnable = postStatus === "success";
    const {user, userStatus} = useGetSingleUser({
        userId: post?.user_id,
        isEnable: isEnable,
    });

    // use effect for initializing the editor
    useEffect(() => {
        // crate time interval for checking if the post and user is fetched
        const interval = setInterval(() => {
                if (postStatus === "success" && userStatus === "success") {
                    // initialize the editor
                    initEditor(id, post?.data, true);
                    // clear the interval
                    removeDuplicatedDiv(id, "codex-editor codex-editor--rtl")
                    clearInterval(interval);
                }
            },
            500
        );
    });


    const isDataFetched =
        postStatus === "success" && userStatus === "success" && isEnable;
    if (isDataFetched) {
        return (
            <Page>
                <div id={id} style={{marginTop: '2rem'}}/>
            </Page>
        );
    } else {
        return (
            <Container>
                <h1>loading...</h1>
            </Container>
        );
    }
}

export default ReadBlog;
