import React from 'react';
import {
    NoPaddingContainer,
    ResponsiveBody,
    ResponsiveHeader,
    TextContainer
} from "./general/IntroComponent";
import {images} from "../constants";

function HomepageIntro() {
    return (
        <NoPaddingContainer sx={{backgroundImage: `url(${images.GreenWave})`,}}>
            <TextContainer>
                <ResponsiveHeader fontWeight={'bold'} variant={'h2'} color={'#ffffff'} gutterBottom>
                    محل قرارگیری یک جمله الهام بخش
                </ResponsiveHeader>
                <ResponsiveBody variant={'h4'} color={'#ffffff'} gutterBottom>
                    محل قرارگیری جمله اول که پرسشی است? و سپس محل قرار گیری جمله دوم که پاسخ به پرسش است. و در انتها یک
                    جمله با علامت تعجب برای نشان دادن اوج هیجان!!!
                </ResponsiveBody>
            </TextContainer>
        </NoPaddingContainer>
    );
}

export default HomepageIntro;