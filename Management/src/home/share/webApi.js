import 'isomorphic-fetch';
import encodeurl from 'encodeurl';

let defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "Connection": "Keep-Alive",
    "mode":"cors"
}
function buildHeaders(headers){
    if (headers) { return Object.assign(defaultHeaders, headers) }
    else { return defaultHeaders }
}

const webApi = {
    checkHttpStatus: (response) => {
        let error = new Error(response.statusText);
        let status = response.status;
        if (status >= 200 && status < 300) {
            return response;
        }
        else if (status == 400) {
            error.type = "validation";
        }
        else if (status == 401) {
            error.type = "validation";
        }
        else if (status == 403) {
            error.type = "forbidden";
        }
        else if (status == 500) {
            error.type = "server";
        }

        error.response = response;

        throw error;
    },
    checkApiResult: (json)=>{
        return json;
    },

    get: (url,headers) => {
        url = encodeurl(url);
        return fetch(url, {
            //credentials: 'include',
            credentials: 'same-origin',
            method: 'GET',
            headers:buildHeaders(headers),
        }).then(response => webApi.checkHttpStatus(response))
            .then(response => response.json())
            .then(webApi.checkApiResult)
    },
    post: (url, data, headers) => {

        url = encodeurl(url);
        return fetch(url, {
            credentials: 'same-origin',
            method: 'POST',
            headers:buildHeaders(headers),
            body:JSON.stringify(data),
        }).then(response => webApi.checkHttpStatus(response))
            .then(response => response.json())
            .then(webApi.checkApiResult)
    },
    put: (url,data, headers) => {
        url = encodeurl(url);
        return fetch(url, {
            credentials: 'same-origin',
            method: 'PUT',
            headers:buildHeaders(headers),
            body:JSON.stringify(data),
        }).then(response => webApi.checkHttpStatus(response))
            .then(response => response.json())
            .then(webApi.checkApiResult)
    },
    del: (url,data, headers) => {
        url = encodeurl(url);
        return fetch(url, {
            credentials: 'same-origin',
            method: 'DELETE',
            headers:buildHeaders(headers),
            body:JSON.stringify(data),
        }).then(response => webApi.checkHttpStatus(response))
            .then(response => response.json())
            .then(webApi.checkApiResult)
    },
}

export default webApi;