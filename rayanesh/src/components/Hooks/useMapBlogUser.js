import useParallelFetch from "./useParallelFetch";

function useMapDataProp({data, propsToMap, propsToMapId, url, isEnable = true}) {
    const propsId = isEnable ? data.map(d => d[propsToMapId]) : null;
    const uniquePropsId = isEnable ? [...new Set(propsId)] : null;
    const {data: fetchedProps, isSuccess} = useParallelFetch({
        url: url,
        userIds: uniquePropsId,
        isEnable: isEnable
    });

    if (isSuccess) {
        console.log('fetchedProps', fetchedProps);
        data = data.map(d => {
            const newProp = fetchedProps.find(props => props.id === d[propsToMapId])
            return {...d, [propsToMap]: newProp}
        });
        return {data, isSuccess}
    } else {
        return {data: null, isSuccess: false}
    }
}

export default useMapDataProp;