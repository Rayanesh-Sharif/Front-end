import React from 'react';
import GetEditor from '../../components/general/RichTextEditor';
import {Container, Input} from "@mui/material";
import BlogInfoAlert from "../../components/BlogInfoAlert";
import BlogSpeedDial from "../../components/BlogSpeedDial";

function WriteBlog() {
    return (
        <Container>
            <BlogInfoAlert />
            <GetEditor data={null} isReadOnly={false}/>
            <BlogSpeedDial />
        </Container>

    )
}

export default WriteBlog;
