import React from "react";
import "./PopularBlogsSection.scss";

import RelativeDate from "../RelativeDate";
import {Box, Container, styled} from "@mui/system";
import {Typography, Grid, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";

const Row = styled(Container)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 50
});


const PopularBlogsSection = ({blogs}) => {
    return (
        <Container>
            <Typography variant={'h4'} dir={'rtl'} m={2}>محبوب‌ترین‌ها</Typography>
            <Grid container spacing={2} columns={{sm: 12, md: 3}}>
                {blogs.map((blog) => (
                    <Grid item sm={12} md={1} key={blog.id}>
                        <Card>

                            <CardActionArea sx={{width: '90%'}}>
                                <Box
                                    display= "flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <CardMedia
                                        component="img"
                                        image={blog.image}
                                        alt="green iguana"
                                    />
                                </Box>
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PopularBlogsSection;
