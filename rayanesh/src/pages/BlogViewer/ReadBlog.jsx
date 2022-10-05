import { Container } from "@mui/material";
import RichTextEditor from "../../components/general/RichTextEditor";
import { useParams } from "react-router-dom";
import useGetSinglePost from "../../hooks/useGetSinglePost";
import useGetSingleUser from "../../hooks/useGetSingleUser";
import { useEffect, useState } from "react";

function ReadBlog() {
  let params = useParams();
  const id = params.id;
  const { post, postStatus } = useGetSinglePost({ postId: id });
  let isEnable = null;
  isEnable = postStatus === "success";
  const { user, userStatus } = useGetSingleUser({
    userId: post?.user_id,
    isEnable: isEnable,
  });
  const isDataFetched =
    postStatus === "success" && userStatus === "success" && isEnable;
  if (isDataFetched) {
    return (
      <Container sx={{ fontFamily: "Vazir" }}>
        <RichTextEditor data={post?.data} isReadOnly={true} id={id} />
      </Container>
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
