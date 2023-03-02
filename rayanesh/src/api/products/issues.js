import handleRequests from "../handleRequests";


export async function fetchIssuePreview({issueId}) {
    const {data} = await handleRequests({
        url: `products/issues/previews/${issueId}`,
        method: 'GET'
    })
    return data
}

export async function downloadIssue({issueId}) {
    const {data} = await handleRequests({
        url: `products/issues/download/${issueId}`,
        method: 'GET'
    })
    return data
}