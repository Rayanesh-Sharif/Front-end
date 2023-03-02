import useGetIssuePreview from "../hooks/useGetIssuePreview";
import {Container, Grid2} from "@mui/material";


function IssuePreview({issueId}) {

    const issue = useGetIssuePreview(issueId);

    return (
        <Container>
            <Grid2>

            </Grid2>
        </Container>
    );
}