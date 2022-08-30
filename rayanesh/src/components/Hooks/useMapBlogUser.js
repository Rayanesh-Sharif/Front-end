import useParallelFetch from "./useParallelFetch";

function useMapDataProp({data, propsToMap, propsToMapId,url, isEnable = true}) {

    const propsId = isEnable ? data.map(d => d[propsToMapId]) : null;
    const uniquePropsId = isEnable? [...new Set(propsId)] : null;
    const {data: fetchedProps, isSuccess} = useParallelFetch({url, uniquePropsId, isEnable});

    if (isSuccess) {
        data = data.map(d => {
            const newProp = fetchedProps.find(props => props.id === d[propsToMapId])
            return {...d, [propsToMap]: newProp}
        }).sort((a, b) => a.id - b.id);

        return {data, isSuccess}
    } else {
        return {data:null, isSuccess: false}
    }
}

export default useMapDataProp;