import {Card, CardContent, Divider, Grid, Skeleton} from "@mui/material";
import React, {useState} from "react";

let times = 0;
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
    times++;
    console.log(times);
    return [...Array(3)].map((e, i) =>
        <Card square sx={cardStyle} key={i + times * 3}>
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
                        {skeletonMeta()}
                    </CardContent>
                </Grid>
                <Grid item xs={3}>
                    <Skeleton  variant={'rectangular'} height={'100%'} sx={mediaStyle}/>
                </Grid>
            </Grid>
            <Divider sx={{marginTop:'1rem'}}/>
        </Card>
    );
}

export default SkeletonBlog