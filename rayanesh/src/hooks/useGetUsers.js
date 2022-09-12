import {useQueries} from "@tanstack/react-query";
import {fetchUserById} from "../api/users";

function useGetUsers({data, isEnable}) {
    const queries = data?.map(id => {
        return {
            queryKey: ['getUserById', id],
            queryFn: () => fetchUserById({userId: id}),
            options: {
                enabled: isEnable
            }
        }
    })

    const result = useQueries({
        queries: queries
    })


    const isSuccess = result.every(query => query.status === 'success')
    const users = result?.map(query => query.data)
    return {users, isSuccess}
}

export default useGetUsers;