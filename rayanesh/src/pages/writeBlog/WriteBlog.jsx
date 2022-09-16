import React, {useState} from 'react';
import GetEditor from '../../components/general/RichTextEditor';
import {Container, Input} from "@mui/material";
import BlogInfoAlert from "../../components/BlogInfoAlert";
import BlogSpeedDial from "../../components/BlogSpeedDial";
import BlogWritePublishDialog from "../../components/BlogWritePublishDialog";


function WriteBlog() {
    const [open, setOpen] = useState(false)
    return (
        <Container>
            <BlogInfoAlert/>
            <GetEditor data={null} isReadOnly={false}/>
            <BlogSpeedDial setOpen={setOpen}/>
            <BlogWritePublishDialog open={open} setOpen={setOpen}/>
        </Container>

    )
}

export default WriteBlog;
