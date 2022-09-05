import React from "react";
import "./PopularBlogsSection.scss";
import {Container} from "@mui/system";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent
} from "@mui/material";
import BlogMeta from "../BlogMeta";


const PopularBlogsSection = ({blogs}) => {
    return (
        <Container>
            <Typography variant={"h4"} dir={"rtl"} m={2}>
                محبوب‌ترین‌ها
            </Typography>
            <Grid container spacing={2} columns={{sm: 12, md: 3}}>
                {blogs.map((blog) => (
                    <Grid item sm={12} md={1} key={blog.id}>
                        <Card>
                            <CardActionArea>
                                <CardMedia sx={{maxHeight: 275}}
                                           image={"https://picsum.photos/1000/1000?random=" + (blog.id + 3)}
                                           component="img"
                                           alt={blog.title}
                                />
                                <CardContent dir='rtl'>
                                    <Typography variant="h5" component="div">
                                        {blog.title}
                                    </Typography>
                                    <Typography paragraph variant="body2">
                                        {blog.description}
                                    </Typography>
                                    <BlogMeta blog={blog}/>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PopularBlogsSection;
