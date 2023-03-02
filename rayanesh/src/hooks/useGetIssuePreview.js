import {useQuery} from "@tanstack/react-query";
import {fetchIssuePreview} from "../api/products/issues";



function useGetIssuePreview({issueId, isEnable}) {
    const {
        data: issue
        ,status: issueStatus
    } = useQuery({
        queryKey: ['getIssuePreview', issueId],
        queryFn: () => fetchIssuePreview({issueId}),
        enabled: isEnable
    })

    return {issue, issueStatus}
}

export default useGetIssuePreview;