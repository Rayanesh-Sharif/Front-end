import {
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Card,
  Container,
} from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import BlogMeta from "./general/BlogMeta";
import SkeletonBlog from "./SkeletonBlog";

const cardStyle = {
  marginBottom: 3,
  marginTop: 3,
  width: "75%",
  marginLeft: "auto",
  marginRight: "auto",
};

const mediaStyle = {
  maxHeight: 130,
  marginLeft: 1,
  marginRight: "auto",
  borderRadius: 2,
  marginTop: 0.9,
  maxWidth: '75%'
};
const BlogsViewer = ({
  blogs,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  setPage,
  page,
}) => {
  const { ref, inView } = useInView();
  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);
  return (
    <>
      <Container>
        {blogs?.map((blog) => (
          <Card raised sx={cardStyle} key={blog.id}>
            <Grid dir={"rtl"} container>
              <Grid item xs={9}>
                <CardContent dir={"rtl"}>
                  <Typography variant={"h6"} fontWeight={"bold"} gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography
                    variant={"body2"}
                    color={"textSecondary"}
                    gutterBottom
                  >
                    {blog.description}
                  </Typography>
                  <BlogMeta blog={blog} />
                </CardContent>
              </Grid>
              <Grid item xs={3}>
                <CardMedia
                  sx={mediaStyle}
                  image={
                    "https://picsum.photos/1000/1000?random=" + (blog.id + 3)
                  }
                  component="img"
                  alt={blog.title}
                />
              </Grid>
            </Grid>
          </Card>
        ))}
        <Container>
          {
            isFetchingNextPage && <SkeletonBlog />
          }

          <button
            ref={ref}
            onClick={() => {
              return fetchNextPage();
            }}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load Newer"
              : "Nothing more to load"}
          </button>
        </Container>
        <div>
          {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
        </div>
      </Container>
    </>
  );
};

export default BlogsViewer;
