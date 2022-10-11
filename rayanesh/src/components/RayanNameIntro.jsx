import {images} from "../constants";
import {Button, Container, Divider, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import ScrollTrigger from 'mui-scroll-trigger'

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
            مشاهده رایان نامه ها
        </ColorButton>

    </div>;
}

function ContextDiv() {
    return <div>
        <Typography marginTop={'1rem'} variant={'h3'} fontWeight={'bold'} gutterBottom
                    sx={{color: '#14937e'}}>
            نشریه‌های رایانش را در اینجا دنبال کنید
        </Typography>

        <Typography marginTop={'2rem'} variant={'h5'} gutterBottom>
            نشریه رایانش هر چند وقت یک بار مجله هایی برای شما منتشر میکنه. در اینجا می توانید نشریات رایانش را دنبال کنید
        </Typography>
    </div>;
}

const RayanNameIntro = () => {
    return (
        <Container dir={'ltr'} sx={containerStyle}>
            <Divider sx={{marginBottom: '1rem'}}/>
            <Grid container>
                    <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} item lg={7} md={7} sm={7}
                          xs={12}>
                        <img src={images.Magazine} alt={'Typewriter'} style={{width: '90%', height:'90%'}}/>
                    </Grid>
                <Grid dir={'rtl'} item lg={5} md={5} sm={5} xs={12}>
                    {ContextDiv()}
                    {ButtonDiv()}
                </Grid>
            </Grid>
            <Divider/>
        </Container>
    )
}

export default RayanNameIntro;