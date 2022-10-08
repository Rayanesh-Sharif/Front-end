import handleRequests from "./handleRequests";

export async function fetchUserById({userId}) {
    const {data} = await handleRequests({
        url: `users/${userId}`,
        method: 'GET'
    })
    return data
}


export async function postUser(user) {
    console.log(user)
    const {data} = await handleRequests({
        url: 'users',
        method: 'POST',
        data: user
    })
    return data
}