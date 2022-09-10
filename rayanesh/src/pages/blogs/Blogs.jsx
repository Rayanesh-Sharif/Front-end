import BlogIntro from '../../components/BlogIntro';
import PopularBlogsSection from "../../components/PopularBlogsSection";
import BlogsViewer from "../../components/BlogsViewer";
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

    const {users, isSuccess: isUsersFetched} = useGetUsers({
        data: [...idList],
        isEnable: isPostsFetched
    })

    if (isUsersFetched && isPostsFetched) {
        const popularBlogsWithUser = mapBlogsToUser({blogs: popularPosts, users})
        const recentBlogsWithUser = mapBlogsToUser({blogs: recentPosts, users})
        return (
            <>
                <PopularBlogsSection blogs={popularBlogsWithUser}/>
                <BlogIntro/>
                <BlogsViewer blogs={recentBlogsWithUser}/>
            </>
        );
    }
}

export default Blogs;