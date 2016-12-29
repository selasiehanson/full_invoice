import axios from 'axios';


function getCurrentAccount() {
    return +localStorage.getItem('current_account');
}

function getToken() {
    return localStorage.getItem('id_token')
}

const headerConfig = {
    'Authorization': `Bearer ${getToken()}`
}

const config = {
    'headers': headerConfig
}
export default class ApiFetcher {


    static findAll(model) {
        return axios.get(`${getCurrentAccount()}/${model}`, config);
    }

    static find(model, id) {
        return axios.get(`${getCurrentAccount()}/${model}/${id}`, config);
    }

    static create(model, data) {
        return axios.post(`${getCurrentAccount()}/${model}`, data, config);
    }

    static update(model, data) {
        return axios.put(`${getCurrentAccount()}/${model}/${data.id}`, data, config);
    }

    static makeRequest(method, url, data = {}, headers = {}) {
        return axios({
            method: method.toLowerCase(),
            url: `${url}`,
            data: data,
            headers: {}
        });
    }


}