import {CardContent, CardMedia, Grid, Typography, Card, Container} from "@mui/material";
import React from "react";
import BlogMeta from "./general/BlogMeta";

const BlogsViewer = ({blogs}) => {
    const cardStyle = {
        marginBottom: 3,
        marginTop: 3,
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    const mediaStyle = {
        maxHeight: 130,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 2,
        marginTop: 0.5
    }
    return (
        <>
            <Container>
                {
                    blogs.map((blog) => (
                        <Card
                            raised
                            sx={cardStyle}
                            key={blog.id}>
                            <Grid dir={'rtl'} container>
                                <Grid item xs={10}>
                                    <CardContent dir={'rtl'}>
                                        <Typography variant={'h6'} fontWeight={'bold'} gutterBottom>
                                            {blog.title}
                                        </Typography>
                                        <Typography variant={'body2'} color={'textSecondary'} gutterBottom>
                                            {blog.description}
                                        </Typography>
                                        <BlogMeta blog={blog}/>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={2}>
                                    <CardMedia sx={mediaStyle}
                                               image={"https://picsum.photos/1000/1000?random=" + (blog.id + 3)}
                                               component="img"
                                               alt={blog.title}
                                    />
                                </Grid>
                            </Grid>
                        </Card>
                    ))
                }
            </Container>
        </>
    )
}

export default BlogsViewer;