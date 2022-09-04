import {useQueries} from "@tanstack/react-query";


const fetchUserById = async (url, id) => {
    const result = await fetch(`${url}/${id}`);
    return result.json()
}


const useParallelFetch = ({url, userIds, isEnable = true}) => {
    const queries = isEnable ? userIds.map(id => {
        return {
            queryKey: ['user', url, id],
            queryFn: () => fetchUserById(url, id),
            options: {
                enabled: isEnable
            }
        }
    }) : [{queryKey: ['user'], queryFn: () => null, options: {enabled: false}}];

    const result = useQueries({
        queries: queries
    })


    const isSuccess = result.every(query => query.status === 'success')
    const users = result.map(query => query.data)

    if (isEnable){
        return {data: users, isSuccess}
    }else{
        return {data: null, isSuccess : false}
    }
};


export default useParallelFetch;