import React from 'react';
import GetEditor from '../../components/general/RichTextEditor';
import {Container, Input} from "@mui/material";
import BlogInfoAlert from "../../components/BlogInfoAlert";

function WriteBlog() {
    return (
        <Container>
            <BlogInfoAlert />
            <GetEditor data={null} isReadOnly={false}/>
        </Container>

    )
}

export default WriteBlog;
