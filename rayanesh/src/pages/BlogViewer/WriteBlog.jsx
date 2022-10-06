import React, {useId, useState} from 'react';
import RichTextEditor from '../../components/general/RichTextEditor';
import {Container} from "@mui/material";
import BlogInfoAlert from "../../components/BlogInfoAlert";
import BlogSpeedDial from "../../components/BlogSpeedDial";
import BlogWritePublishDialog from "../../components/BlogWritePublishDialog";


function WriteBlog() {
    const [open, setOpen] = useState(false)
    const id = useId();

    return (
        <Container>
            <BlogInfoAlert/>
            <RichTextEditor data={null} isReadOnly={false} id={id}/>
            <BlogSpeedDial setOpen={setOpen}/>
            <BlogWritePublishDialog open={open} setOpen={setOpen} editorId={id}/>
        </Container>

    )
}

export default WriteBlog;
