import React from 'react';
import {useInfiniteQuery} from "@tanstack/react-query";

const InfiniteScrollBlogs = () => {
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
        ['projects'],
        async ({ pageParam = 0 }) => {
            const res = await fetch('http://localhost:3000/posts?_sort=date&_order=desc', + pageParam)
            return res.data
        },
        {
            getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
            getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
        },
    )

    return (
        <div>

        </div>
    );
};

export default InfiniteScrollBlogs;