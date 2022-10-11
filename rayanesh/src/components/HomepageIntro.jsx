import React from 'react';
import {Button, Container, Typography} from "@mui/material";
import {images} from "../constants";
import {styled} from "@mui/material/styles";


const mainContainerStyle = {
    backgroundImage: `url(${images.GreenWave})`,
    height: '80vh',
    backgroundSize: 'cover',
    display: 'flex',
    padding: '0',
    margin: '0',
}

const NoPaddingContainer = styled(Container)({
    padding: '0',
    margin: '0',
    height: '80vh',
    backgroundSize: 'cover',
    display: 'flex',
    backgroundImage: `url(${images.GreenWave})`,
    minWidth: '100%',
})

const TextContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '60%',
    textAlign: 'center',
})

const HomepageButton = styled(Button)({
    backgroundColor: '#ffffff',
    color: '#038a79',
    margin: '10px',
    '&:hover': {
        backgroundColor: '#038a79',
        color: '#ffffff',
    }
})


function HomepageIntro() {
    return (
        <NoPaddingContainer>
            <TextContainer>
                <Typography fontWeight={'bold'} variant={'h2'} color={'#ffffff'} gutterBottom>
                    محل قرارگیری یک جمله الهام بخش
                </Typography>
                <Typography variant={'h4'} color={'#ffffff'} gutterBottom>
                    محل قرارگیری جمله اول که پرسشی است? و سپس محل قرار گیری جمله دوم که پاسخ به پرسش است. و در انتها یک
                    جمله با علامت تعجب برای نشان دادن اوج هیجان!!!
                </Typography>

                <Container>
                    <HomepageButton size={'large'}>
                        این دکمه را فشار ندهید
                    </HomepageButton>

                    <HomepageButton size={'large'}>
                        این دکمه را هم فشار ندهید
                    </HomepageButton>

                </Container>

            </TextContainer>
        </NoPaddingContainer>
    );
}

export default HomepageIntro;