import axios from "axios"
import { Method, RequestConfig } from "../@types/api"


const buildRequest = (method: Method) => async <ResponseData, RequestData = undefined>({
    url,
    data, config
}: {
    url: string
    data?: {}
    config?: RequestConfig
}) => {
    return new Promise((resolve, reject) => {
        axios.request({ url, data }).then((response) => {
            if (response.status === 200) {
                resolve({ data: response.data })
            }
            else {
                reject();
            }

        }).catch(e => {
            reject(e)
        })
    })

}


export const getRequest = buildRequest('GET')
export const postRequest = buildRequest('POST')
export const patchRequest = buildRequest('PATCH')
export const putRequest = buildRequest('PUT')
