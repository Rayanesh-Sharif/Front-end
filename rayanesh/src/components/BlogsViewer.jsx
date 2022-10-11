import {
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Card,
    Container, CardActionArea, Divider,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import React, {useState} from "react";
import {useInView} from "react-intersection-observer";
import BlogMeta from "./general/BlogMeta";
import SkeletonBlog from "./SkeletonBlog";
import {useNavigate} from "react-router-dom";

const cardStyle = {
    marginBottom: 3,
    marginTop: 3,
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: 0,
};

const mediaStyle = {
    borderRadius: 2,
    maxWidth: '75%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf:'auto'
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
    const {ref, inView} = useInView();
    React.useEffect(() => {
        if (inView) {
            setPage((prev) => prev + 1);
            fetchNextPage();
        }
    }, [inView]);
    const navigate = useNavigate();
    return (
        <div>
            <Container>
                {blogs?.map((blog) => (
                    <Card  sx={cardStyle}
                          onClick={() => navigate(`/blogs/${blog.id}`)}
                          key={blog.id}
                    >
                        <CardActionArea>
                            <Grid dir={"rtl"} container>
                                <Grid item sm={9} xs={7}>
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
                                        <BlogMeta blog={blog}/>
                                    </CardContent>
                                </Grid>
                                <Grid item sm={3} xs={5} sx={{alignSelf: 'auto'}}>
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
                        </CardActionArea>
                        <Divider sx={{marginTop:'1rem'}}/>
                    </Card>
                ))}
                <div>
                    {
                        isFetchingNextPage && <SkeletonBlog />
                    }
                    <Grid container justifyContent={'center'}>
                        <LoadingButton
                            loading
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
                        </LoadingButton>
                    </Grid>
                </div>
                <div>
                    {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
                </div>
            </Container>
        </div>
    );
};

export default BlogsViewer;
