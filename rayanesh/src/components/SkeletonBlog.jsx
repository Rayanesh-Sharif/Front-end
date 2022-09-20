import {Card, CardContent, Grid, Skeleton} from "@mui/material";
import React from "react";

const cardStyle = {
    marginBottom: 3,
    marginTop: 3,
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
};

const mediaStyle = {
    marginLeft: 1,
    marginRight: "auto",
    borderRadius: 2,
    marginTop: 0.6,
    maxWidth: '75%',
    marginBottom: 0.4
};

function SkeletonBlog({repeat = 3}) {
    return [...Array(repeat)].map((i) =>
        <Card raised sx={cardStyle} key={i}>
            <Grid dir={"rtl"} container>
                <Grid item xs={9}>
                    <CardContent dir={"rtl"}>

                        <Skeleton
                            variant={'text'}
                            width={'10%'}
                        />

                        <Skeleton
                            variant={'text'}
                            width={'70%'}
                        />

                        <Grid dir={'rtl'} container alignItems="center" spacing={1}>
                            <Grid  item lg={1} md={1} sm={1.8} xs={2.5}>
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
                        </Grid>

                    </CardContent>
                </Grid>

                <Grid item xs={3}>
                    <Skeleton variant={'rectangular'} height={'92%'} sx={mediaStyle}/>
                </Grid>
            </Grid>
        </Card>
    );
}

export default SkeletonBlog