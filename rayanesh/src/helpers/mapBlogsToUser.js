function mapBlogsToUser({blogs, users}) {
    return blogs?.map(blog => {
        const user = users?.find(user => user.id === blog.user_id)
        return {...blog, user}
    })
}

export default mapBlogsToUser