import axios, { AxiosResponse } from 'axios';
import { ISushi } from '../models/sushi';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
};

const Sushis = {
    list: (): Promise<ISushi[]> => requests.get('/sushis'),
    details: (id: string) => requests.get(`/sushis/${id}`),
    create: (sushi: ISushi) => requests.post('/sushis', sushi),
    update: (sushi: ISushi) => requests.put(`/sushis/${sushi.id}`, sushi),
    delete: (id: string) => requests.del(`/sushis/${id}`)
}

export default {
    Sushis
} 