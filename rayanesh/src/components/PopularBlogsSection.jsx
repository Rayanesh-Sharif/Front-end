import React from "react";
import {Container} from "@mui/system";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent
} from "@mui/material";
import BlogMeta from "./general/BlogMeta";
import Image from "./general/Image";
import {useNavigate} from "react-router-dom";


const PopularBlogsSection = ({blogs}) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Typography variant={"h6"} dir={"rtl"} fontWeight={'bold'} marginTop={5}>
                محبوب‌ترین‌ها
            </Typography>
            <Typography variant={"body2"} dir={"rtl"} color={'textSecondary'} gutterBottom>
                مطالبی که بیشترین بازدید را داشته‌اند
            </Typography>
            <Grid container justifyContent={'center'} spacing={2} columns={{sm: 12, md: 3}} alignItems="stretch">
                {blogs?.map((blog) => (
                    <Grid item sm={12} md={1} key={blog.id}>
                        <Card
                            sx={{
                                boxShadow: 0,
                                ':hover': {
                                    boxShadow: 6,
                                }
                            }}

                            onClick={() => navigate(`/blogs/${blog.id}`)}

                        >
                            <CardActionArea>
                                <CardMedia sx={{height: 275, width: '100%'}}>
                                    <Image
                                        width='100%'
                                        height='100%'
                                        path={"https://picsum.photos/1000/1000?random=" + (blog.id + 3)}
                                        name={blog.title}/>
                                </CardMedia>
                                <CardContent dir='rtl'>
                                    <Typography variant="h6" fontWeight={'bold'} gutterBottom>
                                        {blog.title}
                                    </Typography>
                                    <Typography paragraph color={'textSecondary'} variant="body2">
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
