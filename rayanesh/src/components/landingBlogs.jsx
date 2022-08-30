import React from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import PopularBlogsSection from "./PopularBlogSection/PopularBlogsSection";
import {useQuery} from "react-query";

const fetchPopularBlogs = async () => {
    const result = await fetch('http://localhost:3000/popular_posts')
    return result.json()
}

function LandingBlogs(props) {
    const {data: popularBlogs, status: pStatus} = useQuery('popular_blogs', fetchPopularBlogs)
    return (
        <PopularBlogsSection blogs={popularBlogs}/>
        // <MDBContainer>
        //     <MDBRow around={true}>
        //         <MDBCol>
        //             a
        //         </MDBCol>
        //         <MDBCol>
        //             b
        //         </MDBCol>
        //         <MDBCol>
        //             c
        //         </MDBCol>
        //     </MDBRow>
        // </MDBContainer>
    );
}

export default LandingBlogs;
