import {Container} from "@mui/system";
import {Grid, Button, Paper, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import * as React from 'react';
import {styled} from '@mui/material/styles';

const ColorButton = styled(Button)(({theme}) => ({
    marginTop: 13,
    borderColor: 'white',
    color: 'white',
    backgroundColor: '#1a844f',
    '&:hover': {
        borderColor: 'white'
    }
}));

const BlogIntro = () => {
    return (
        <Container>
            <Paper elevation={3} sx={{backgroundColor: '#1a844f', width: '100%', margin: 'auto'}}>
                <Grid
                    marginTop={3}
                    container dir={'rtl'}
                >
                    <Grid item lg={1} marginRight={3}>
                        <Typography
                            variant={'h3'}
                            color={"white"}
                            gutterBottom>
                            در
                        </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography
                            fontWeight={'bold'}
                            variant={'h3'}
                            color={"white"}
                            gutterBottom
                        >
                            [رایانش]
                        </Typography>
                    </Grid>
                    <Grid item lg={4} marginRight={1}>
                        <Typography
                            variant={'h3'}
                            color="white"
                            gutterBottom
                        >
                            بخوانید و بنویسید
                        </Typography>
                    </Grid>
                    <Grid dir={'ltr'} item lg={4}>
                        <ColorButton variant="outlined" endIcon={<SendIcon/>}>
                            یک پست بنویس
                        </ColorButton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default BlogIntro;