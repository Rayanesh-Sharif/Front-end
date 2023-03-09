import handleRequests from "./handleRequests";

export async function fetchPopularPosts() {
    const {data} = await handleRequests({
        url: 'posts?_sort=views&_order=desc&_limit=3',
        method: 'GET'
    })
    return data
}

export async function fetchRecentBlogs({page=0, pageLimit=3}) {
    console.log(page)
    //delay for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000))
    const {data} = await handleRequests({
        url: `posts?_sort=date&_order=desc&_page=${page}&_limit=${pageLimit}`,
        method: 'GET'
    })
    return data
}

export async function fetchPostById({postId}) {
    const {data} = await handleRequests({
        url: `posts/${postId}`,
        method: 'GET'
    })
    return data
}