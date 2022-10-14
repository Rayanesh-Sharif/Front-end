import { Container } from "@mui/material";
import RichTextEditor from "../../components/general/RichTextEditor";
import { useParams } from "react-router-dom";
import useGetSinglePost from "../../hooks/useGetSinglePost";
import useGetSingleUser from "../../hooks/useGetSingleUser";
import Page from "../../components/general/Page";

function ReadBlog() {
  const id = useParams().id;

  let isEnable = Boolean(id);
  const { post, postStatus } = useGetSinglePost({ postId: id, isEnable: isEnable});
  isEnable = postStatus === "success";
  const { user, userStatus } = useGetSingleUser({
    userId: post?.user_id,
    isEnable: isEnable,
  });
  const isDataFetched =
    postStatus === "success" && userStatus === "success" && isEnable;
  if (isDataFetched) {
    return (
      <Page sx={{ fontFamily: "Vazir" }}>
        <RichTextEditor data={post?.data} isReadOnly={true} id={id} />
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
