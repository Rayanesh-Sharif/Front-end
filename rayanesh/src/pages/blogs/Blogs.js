import BlogIntro from '../../components/Intro/BlogIntro';
import './blogs.scss';
import PopularBlogsSection from "../../components/PopularBlogSection/PopularBlogsSection";
import BlogsViewer from "../../components/BlogsViewer/BlogsViewer";
import useFetch from "../../components/Hooks/useFetch";
import useMapDataProp from "../../components/Hooks/useMapBlogUser";
import {MDBCard} from "mdb-react-ui-kit";
import React, {useRef} from "react";
import InfiniteScrollBlogs from "../../components/InfiniteScrollBlogs/InfiniteScrollBlogs";

function Blogs() {
    const editorRef = useRef()

    const {data: popularBlogs, status: pStatus} = useFetch(
        {
            url: 'http://localhost:3000/posts?_sort=views&_order=desc&_limit=3',
            key: 'popular_blogs',
            isEnable: true
        }
    )
    const {data: recentBlogs, status: rStatus} = useFetch(
        {
            url: 'http://localhost:3000/posts?_sort=date&_order=desc',
            key: 'recent_blogs',
            isEnable: true
        }
    )

    const isSuccess = pStatus === 'success' && rStatus === 'success'

    const {data: blogsWithUser, isSuccess: isMapped} = useMapDataProp({
        data: recentBlogs,
        propsToMap: 'user',
        propsToMapId: 'user_id',
        url: 'http://localhost:3000/users',
        isEnable: isSuccess
    })

    if (isMapped) {

        return (
            <>
                <PopularBlogsSection blogs={popularBlogs}/>
                <BlogIntro/>
                <BlogsViewer blogs={blogsWithUser}/>
                <InfiniteScrollBlogs />
            </>
        );
    }
}

export default Blogs;