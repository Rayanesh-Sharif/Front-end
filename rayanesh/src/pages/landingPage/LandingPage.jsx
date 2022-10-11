import React from 'react';
import Page from "../../components/general/Page";
import {Container} from "@mui/material";
import HomepageIntro from "../../components/HomepageIntro";
import {styled} from "@mui/material/styles";
import BlogsIntro from "../../components/BlogsIntro";
import RayanNameIntro from "../../components/RayanNameIntro";
import AboutUsIntro from "../../components/AboutUsIntro";

const LandingPageContainer = styled(Container)(({theme}) => ({
    margin: '0',
    padding: '0',
    maxWidth: '100%',
}));


function LandingPage() {

    return (
        <Page>
            <LandingPageContainer maxWidth='100%' disableGutters>
                <HomepageIntro/>
                <BlogsIntro />
                <RayanNameIntro />
                <AboutUsIntro />
            </LandingPageContainer>
        </Page>
    );
}

export default LandingPage;

