import BlogIntro from "../../components/BlogIntro";
import PopularBlogsSection from "../../components/PopularBlogsSection";
import BlogsViewer from "../../components/BlogsViewer";
import useGetPopularPosts from "../../hooks/useGetPopularPosts";
import useGetRecentPosts from "../../hooks/useGetRecentPosts";
import useGetUsers from "../../hooks/useGetUsers";
import mapBlogsToUser from "../../helpers/mapBlogsToUser";
import { useState } from 'react';

function Blogs() {
  const [page, setPage] = useState(2);
  const { popularPosts, popularPostsStatus } = useGetPopularPosts();
  const { recentPosts, recentPostsStatus, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useGetRecentPosts(page);

  const isPostsFetched =
    popularPostsStatus === "success" && recentPostsStatus === "success";

  let posts = [];
  let idList = new Set();
  if (isPostsFetched) {
    popularPosts.forEach((post) => idList.add(post.user_id));
    recentPosts?.pages?.forEach((page) => {
      page.forEach((post) => {
        idList.add(post.user_id);
        posts.push(post);
      });
    });
  }

  const { users, isSuccess: isUsersFetched } = useGetUsers({
    data: [...idList],
    isEnable: isPostsFetched,
  });

  if (isUsersFetched && isPostsFetched) {
    const popularBlogsWithUser = mapBlogsToUser({ blogs: popularPosts, users });
    const recentBlogsWithUser = mapBlogsToUser({ blogs: posts, users });
    return (
      <>
        <PopularBlogsSection blogs={popularBlogsWithUser} />
        <BlogIntro />
        <BlogsViewer
          blogs={recentBlogsWithUser}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          setPage={setPage}
          page={page}
        />
      </>
    );
  }
}

export default Blogs;
