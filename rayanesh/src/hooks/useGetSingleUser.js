import {useQuery} from "@tanstack/react-query";
import {fetchUserById} from "../api/users";

function useGetSingleUser({userId, isEnable}) {
    const {
        data: user
        ,status: userStatus
    } = useQuery({
        queryKey: ['getUserById', userId],
        queryFn: () => fetchUserById({userId}),
        enabled: isEnable
    })

    return {user, userStatus}
}

export default useGetSingleUser;