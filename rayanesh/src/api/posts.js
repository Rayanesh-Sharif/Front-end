import handleRequests from "./handleRequests";

export async function fetchPopularPosts() {
    const {data} = await handleRequests({
        url: 'posts?_sort=views&_order=desc&_limit=3',
        method: 'GET'
    })
    return data
}

export async function fetchRecentBlogs() {
    const {data} = await handleRequests({
        url: 'posts?_sort=date&_order=desc',
        method: 'GET'
    })
    return data
}
