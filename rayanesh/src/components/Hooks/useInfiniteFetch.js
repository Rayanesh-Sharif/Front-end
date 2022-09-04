import {useInfiniteQuery} from "@tanstack/react-query";

//fetch data with page and limit params from url in async style
const fetchData = async ({url, page, limit}) => {
    const result = await fetch(`${url}?page=${page}&limit=${limit}`)
    return result.json()
}


//use infinite query and fetch data and next page to fetch data from url
const UseInfiniteFetch = (url, key,limit, isEnable = true) => {
    const {
        status,
        data,
        error,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
    } = useInfiniteQuery(
        [key, url, limit],
        () => fetchData()
        ,
        {
            getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
            getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
        },
    )
}