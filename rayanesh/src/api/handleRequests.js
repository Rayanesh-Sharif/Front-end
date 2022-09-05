import api from "./axios";

export default async function handleRequests({url, method, data, headers}) {
    switch (method){
        case 'GET':
            return await api.get(url, {headers})
        case 'POST':
            return await api.post(url, data, {headers})
        case 'PUT':
            return await api.put(url, data, {headers})
        default:
            return Error('Method not supported')
    }
}