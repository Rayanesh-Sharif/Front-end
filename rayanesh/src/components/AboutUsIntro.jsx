import {images} from "../constants";
import {Button, Container, Divider, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";

const containerStyle = {
    borderRadius: '10px',
}

const ColorButton = styled(Button)(({theme}) => ({
    margin: '0.5rem',
    borderColor: 'white',
    color: 'white',
    backgroundColor: '#14937e',
    '&:hover': {
        borderColor: 'white',
        color: '#14937e'
    }
}));

function ButtonDiv() {
    const navigate = useNavigate()
    return <div style={{marginTop: '1.5rem', marginBottom: '1.5'}}>
        <ColorButton
            onClick={() => navigate("/blogs/write")}
        >
            در مورد ما بیشتر بدونید!
        </ColorButton>

    </div>;
}

function ContextDiv() {
    return <div>
        <Typography marginTop={'1rem'} variant={'h3'} fontWeight={'bold'} gutterBottom
                    sx={{color: '#14937e'}}>
            درباره ما
        </Typography>

        <Typography marginTop={'2rem'} variant={'h5'} gutterBottom>
            ما چند نفر از بچه های خوش ذوق دانشگاه شریفیم! اگه دوست دارین بیشتر در مورد ما بدونین یا با ما همکاری کنید
            میتونین از طریق این دکمه با ما در ارتباط باشین!
        </Typography>
    </div>;
}

const AboutUsIntro = () => {
    return (
        <Container sx={containerStyle}>
            <Divider sx={{marginBottom: '1rem'}}/>
            <Grid container>
                <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} item lg={7} md={7} sm={7}
                      xs={12}>
                    <img src={images.AboutUs} alt={'Typewriter'} style={{width: '90%', height:'90%'}}/>
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={12}>
                    {ContextDiv()}
                    {ButtonDiv()}
                </Grid>
            </Grid>
            <Divider/>
        </Container>
    )
}

export default AboutUsIntro;