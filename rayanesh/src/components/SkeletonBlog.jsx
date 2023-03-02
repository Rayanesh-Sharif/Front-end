import {Card, CardContent, Divider, Grid, Skeleton} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";

let times = 0;
const BlogCard = styled(Card)(({theme}) => ({
    boxShadow: 'none',
    marginBottom: 3,
    marginTop: 3,
    width: '75%',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
}));

const MediaGrid = styled(Grid)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    direction: 'initial',
}))

function skeletonMeta() {
    return <Grid dir={'rtl'} container alignItems="center" spacing={1}>
        <Grid item lg={1} md={1} sm={1.8} xs={2.5}>
            <Skeleton
                animation={'wave'}
                variant={'circular'}
                width={40}
                height={40}
            />
        </Grid>
        <Grid item xs={8}>
            <Skeleton
                variant={'text'}
                width={'20%'}
            />
            <Skeleton
                variant={'text'}
                width={'40%'}
            />
        </Grid>
    </Grid>;
}

function SkeletonBlog() {
    return [...Array(3)].map((e, i) =>
        <BlogCard square key={i + times * 3}>
            <Grid dir={"rtl"} container>
                <Grid item sm={9} xs={7}>
                    <CardContent dir={"rtl"}>
                        <Skeleton
                            variant={'text'}
                            width={'10%'}
                        />
                        <Skeleton
                            variant={'text'}
                            width={'70%'}
                        />
                        {skeletonMeta()}
                    </CardContent>
                </Grid>
                <MediaGrid dir={'ltr'} item sm={3} xs={5}>
                    <div style={
                        {
                            // create a blink animation
                            backgroundColor: '#f4f4f4',
                            paddingTop: '100%',
                            animation: 'blink 1s linear infinite',
                            borderRadius: 4,
                        }
                    }>
                    </div>
                </MediaGrid>
            </Grid>
            <Divider sx={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
        </BlogCard>
    );
}

export default SkeletonBlog