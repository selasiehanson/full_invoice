import axios from 'axios';

export default class ApiFetcher {

    static findAll(model) {
        return axios.get(`/api/${model}`);
    }

    static find(model, id) {
        return axios.get(`/api/${model}/${id}`);
    }

    static create(model, data) {
        return axios.post(`/api/${model}`, data);
    }

    static update(model, data) {
        return axios.put(`/api/${model}/${data.id}`, data);
    }

}