import BlogIntro from '../../components/Intro/BlogIntro';
import PopularBlogsSection from "../../components/PopularBlogSection/PopularBlogsSection";
import BlogsViewer from "../../components/BlogsViewer/BlogsViewer";
import InfiniteScrollBlogs from "../../components/InfiniteScrollBlogs/InfiniteScrollBlogs";
import useGetPopularPosts from "../../hooks/useGetPopularPosts";
import useGetRecentPosts from "../../hooks/useGetRecentPosts";
import useGetUsers from "../../hooks/useGetUsers";
import mapBlogsToUser from "../../helpers/mapBlogsToUser";

function Blogs() {
    const {popularPosts, popularPostsStatus} = useGetPopularPosts()

    const {recentPosts, recentPostsStatus} = useGetRecentPosts()

    const isPostsFetched = popularPostsStatus === 'success' && recentPostsStatus === 'success'

    let idList = new Set()
    if (isPostsFetched) {
        popularPosts.forEach(post => idList.add(post.user_id))
        recentPosts.forEach(post => idList.add(post.user_id))
    }
    console.log(idList)

    const {users, isSuccess} = useGetUsers({
        data: [...idList],
        isEnable: isPostsFetched
    })

    if (isSuccess && isPostsFetched) {
        console.log('users', users, 'popularPosts', popularPosts, 'recentPosts', recentPosts)
        const popularBlogsWithUser = mapBlogsToUser({blogs: popularPosts, users})
        const recentBlogsWithUser = mapBlogsToUser({blogs: recentPosts, users})
        return (
            <>
                <PopularBlogsSection blogs={popularBlogsWithUser}/>
                <BlogIntro/>
                <BlogsViewer blogs={recentBlogsWithUser}/>
                <InfiniteScrollBlogs/>
            </>
        );
    }
}

export default Blogs;