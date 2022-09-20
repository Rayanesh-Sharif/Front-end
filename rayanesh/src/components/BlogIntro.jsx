import {Container} from "@mui/system";
import {Grid, Button, Paper, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useNavigate} from "react-router-dom";
import * as React from 'react';
import {styled} from '@mui/material/styles';

const ColorButton = styled(Button)(({theme}) => ({
    marginTop: 13,
    borderColor: 'white',
    color: 'white',
    backgroundColor: '#14937e',
    '&:hover': {
        borderColor: 'white'
    }
}));

const BlogIntro = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Paper elevation={3} sx={{backgroundColor: '#14937e', width: '100%', margin: 'auto'}}>
                <Grid
                    alignItems={'center'}
                    marginTop={3}
                    container dir={'rtl'}
                >
                    <Grid item lg={1} md={'auto'} marginRight={3}>
                        <Typography
                            variant={'h3'}
                            color={"white"}
                            gutterBottom
                        marginTop={1}>
                            در
                        </Typography>
                    </Grid>
                    <Grid item lg={2} md={'auto'}>
                        <Typography
                            fontWeight={'bold'}
                            variant={'h3'}
                            color={"white"}
                            marginTop={1}
                            gutterBottom
                        >
                            [رایانش]
                        </Typography>
                    </Grid>
                    <Grid item lg={4} md={'auto'} marginRight={1}>
                        <Typography
                            variant={'h3'}
                            color="white"
                            gutterBottom
                            marginTop={1}
                        >
                            بخوانید و بنویسید
                        </Typography>
                    </Grid>
                    <Grid dir={'ltr'} item lg={4} md={'auto'}>
                        <ColorButton
                            variant="outlined"
                            endIcon={<SendIcon/>}
                            onClick={() => navigate("/blogs/write")}
                        >
                            یک پست بنویس
                        </ColorButton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default BlogIntro;