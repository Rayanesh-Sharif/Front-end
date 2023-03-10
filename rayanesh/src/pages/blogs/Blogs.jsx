import BlogsIntro from "../../components/BlogsIntro";
import PopularBlogsSection from "../../components/PopularBlogsSection";
import BlogsViewer from "../../components/BlogsViewer";
import useGetPopularPosts from "../../hooks/useGetPopularPosts";
import useGetRecentPosts from "../../hooks/useGetRecentPosts";
import useGetUsers from "../../hooks/useGetUsers";
import mapBlogsToUser from "../../helpers/mapBlogsToUser";
import {useState} from 'react';
import Page from "../../components/general/Page";

function Blogs() {
    const [page, setPage] = useState(1);
    const {popularPosts, popularPostsStatus} = useGetPopularPosts();

    const popularPostsWriters = popularPosts?.map((post) => post.user_id);
    const {users, isSuccess: isPopularWritersFetched} = useGetUsers({
        data: popularPosts?.length > 0 ? [...popularPostsWriters] : [],
        isEnable: popularPostsStatus === "success",
    });

    const {recentPosts, recentPostsStatus, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage} =
        useGetRecentPosts(page);

    const posts = []
    const recentPostsWriters = []

    if (recentPostsStatus === "success") {
        recentPosts.pages.forEach((page) => {
            page.forEach((post) => {
                posts.push(post)
                recentPostsWriters.push(post.user_id)
            })
        })
    }


    const {users: recentPostsUsers, isSuccess: isRecentWritersFetched} = useGetUsers({
        data: [...recentPostsWriters],
        isEnable: recentPostsStatus === "success",
    });

    return (
        <Page>
            {isPopularWritersFetched && <PopularBlogsSection blogs={mapBlogsToUser({blogs: popularPosts, users})}/>}
            <BlogsIntro/>
            {
                isRecentWritersFetched &&
                <BlogsViewer
                    blogs={mapBlogsToUser({blogs: posts, users: recentPostsUsers})}
                    fetchNextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                    isFetching={isFetching}
                    isFetchingNextPage={isFetchingNextPage}
                    setPage={setPage}
                    page={page}
                />
            }
        </Page>
    );
}

export default Blogs;
