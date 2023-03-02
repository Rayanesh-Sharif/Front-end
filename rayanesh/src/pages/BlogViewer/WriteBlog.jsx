import React, {useEffect, useId, useState} from 'react';
import {initEditor, removeDuplicatedDiv} from '../../components/general/richTextEditor';
import {Container} from "@mui/material";
import BlogInfoAlert from "../../components/BlogInfoAlert";
import BlogSpeedDial from "../../components/BlogSpeedDial";
import BlogWritePublishDialog from "../../components/BlogWritePublishDialog";
import Page from "../../components/general/Page";


function WriteBlog() {
    const [open, setOpen] = useState(false)
    const id = useId();


    useEffect(() => {
        // crate time interval for checking if the post and user is fetched
        const interval = setInterval(() => {
                // initialize the editor
                initEditor(id, null, false);
                // remove duplicated div
                removeDuplicatedDiv(id, "codex-editor codex-editor--rtl")
                // clear the interval
                clearInterval(interval);
            },
            500
        );
    });

    return (
        <Page>
            <Container>
                <BlogInfoAlert/>
                <div id={id} style={{marginTop: '2rem'}}/>
                    <BlogSpeedDial setOpen={setOpen} />
                <BlogWritePublishDialog open={open} setOpen={setOpen} editorId={id}/>
            </Container>
        </Page>

    )
}

export default WriteBlog;
