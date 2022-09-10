import React from 'react';
import GetEditor from './general/RichTextEditor';
import {Container} from "@mui/material";

function RichTextProvider() {
    return (
        <Container >
            <GetEditor data={null} isReadOnly={false}/>
        </Container>

    )
}

export default RichTextProvider;
