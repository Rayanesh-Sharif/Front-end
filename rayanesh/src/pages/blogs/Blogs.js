import React from 'react';
import {useQuery} from 'react-query'
import BlogIntro from '../../components/Intro/BlogIntro';
import './blogs.scss';
import PopularBlogsSection from "../../components/PopularBlogSection/PopularBlogsSection";
import BlogsViewer from "../../components/BlogsViewer/BlogsViewer";
import { useInView } from 'react-intersection-observer'

const fetchPopularBlogs = async () => {
    const result = await fetch('http://localhost:3000/popular_posts')
    return result.json()
}

const fetchRecentBlogs = async () => {
    const result = await fetch('http://localhost:3000/posts')
    return result.json()
}

function Blogs() {
    const {data: popularBlogs, status: pStatus} = useQuery('popular_blogs', fetchPopularBlogs)
    const {data: recentBlogs, status: rStatus} = useQuery('recent_blogs', fetchRecentBlogs)

    const isSuccess = pStatus === 'success' && rStatus === 'success'

    if (isSuccess) {
        return (
            <>
                <PopularBlogsSection blogs={popularBlogs}/>
                <BlogIntro/>
                <BlogsViewer blogs={recentBlogs} isEnable={isSuccess}/>
            </>
        );
    }
}

export default Blogs;