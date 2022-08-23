import React from 'react';
import {useQuery} from 'react-query'
import BlogIntro from '../../components/Intro/BlogIntro';
import './blogs.scss';
import PopularBlogsSection from "../../components/PopularBlogSection/PopularBlogsSection";
import BlogsViewer from "../../components/BlogsViewer/BlogsViewer";


const fetchRecentBlogs = async () => {
    const result = await fetch('http://localhost:3000/popular_posts')
    return result.json()
}

function Blogs() {
    const {status, data:popularBlogs, errorPb} = useQuery('popular_blogs', fetchRecentBlogs)

    if (status === 'success') {
        return (
            <>
                <PopularBlogsSection blogs={popularBlogs}/>
                <BlogIntro/>

            </>
        );
    } else if (errorPb)
        return (
            <div>
                {errorPb}
            </div>
        )
}

export default Blogs;