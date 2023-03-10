import {globalApi} from "./axios";

export default async function handleRequests({url, method, data, headers}) {
    switch (method){
        case 'GET':
            return await globalApi.get(url, {headers})
        case 'POST':
            return await globalApi.post(url, data, {headers})
        case 'PUT':
            return await globalApi.put(url, data, {headers})
        default:
            return Error('Method not supported')
    }
}