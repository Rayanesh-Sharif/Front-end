import React from 'react';
import {styled} from "@mui/material/styles";
import NavbarSection from "../NavbarSection";
import Footer from "../Footer";

const Container = styled('div')(({color = 'white'}) => ({
    width: '100%',
    height: '100vh',
    backgroundColor: color,
}));

function Page({children}) {

    return (
        <Container>
            <NavbarSection/>
            {children}
        </Container>
    );
}

export default Page;