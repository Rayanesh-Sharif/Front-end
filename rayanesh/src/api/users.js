import handleRequests from "./handleRequests";

export async function fetchUserById({userId}) {
    const {data} = await handleRequests({
        url: `users/${userId}`,
        method: 'GET'
    })
    return data
}


export async function postUser(user) {
    const {data} = await handleRequests({
        url: 'v1/accounts/register/',
        method: 'POST',
        data: user
    })
    return data
}

export async function getToken({username, password}) {
    const {data} = await handleRequests({
        url: 'tokens/',
        method: 'POST',
        data: {username, password}
    })
    return data
}