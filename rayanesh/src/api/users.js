import handleRequests from "./handleRequests";

export async function fetchUserById({userId}) {
    const {data} = await handleRequests({
        url: `users/${userId}`,
        method: 'GET'
    })
    return data
}