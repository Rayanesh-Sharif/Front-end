import React from 'react';
import {useQuery} from 'react-query'
import BlogIntro from '../../components/Intro/BlogIntro';
import './blogs.scss';
import PopularBlogsSection from "../../components/PopularBlogSection/PopularBlogsSection";
import BlogsViewer from "../../components/BlogsViewer/BlogsViewer";

const fetchPopularBlogs = async () => {
    const result = await fetch('http://localhost:3000/popular_posts')
    return result.json()
}

const fetchRecentBlogs = async () => {
    const result = await fetch(' http://localhost:3000/posts')
    return result.json()
}

function Blogs() {
    const {data: popularBlogs, status: pStatus} = useQuery('popular_blogs', fetchPopularBlogs)
    const {data: recentBlogs, status: rStatus} = useQuery('recent_blogs', fetchRecentBlogs)
    if (pStatus === 'success' && rStatus === 'success') {
        return (
            <>
                <PopularBlogsSection blogs={popularBlogs}/>
                <BlogIntro/>
                <BlogsViewer blogs={recentBlogs}/>
            </>
        );
    }
}

export default Blogs;