import handleRequests from "./handleRequests";

export async function fetchPopularPosts() {
    const {data} = await handleRequests({
        url: 'posts?_sort=views&_order=desc&_limit=3',
        method: 'GET'
    })
    return data
}

export async function fetchRecentBlogs({pageParam=0, pageLimit=3}) {
    console.log(pageParam)
    const {data} = await handleRequests({
        url: `posts?_page=${pageParam}&_limit=${pageLimit}`,
        method: 'GET'
    })
    return data
}
