import {useQuery} from "@tanstack/react-query";

function useFetch({url, key, isEnable = true}) {
    const {data, status} = useQuery(
        [key],
        async () => {
            const result = await fetch(url)
            return result.json()
        },
        {
            enabled: isEnable
        }
    )
    return {data, status}
}

export default useFetch;