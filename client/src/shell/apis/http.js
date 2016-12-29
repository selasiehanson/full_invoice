import axios from 'axios';

export default class ApiFetcher {

    static findAll(model) {
        return axios.get(`${model}`);
    }

    static find(model, id) {
        return axios.get(`${model}/${id}`);
    }

    static create(model, data) {
        return axios.post(`${model}`, data);
    }

    static update(model, data) {
        return axios.put(`${model}/${data.id}`, data);
    }

    static makeRequest (method, url, data = {}, headers = {}) {
        return axios({
            method: method.toLowerCase(),
            url: `${url}`,
            data: data,
            headers: {}
        });
    }
    

}