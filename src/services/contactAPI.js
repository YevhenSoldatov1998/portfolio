import * as axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:3001'
    baseURL: 'https://sleepy-sands-77288.herokuapp.com/'
});
export const contactAPI = {
    sendMessage(name, phone, message) {
        return instance.post('/', {name, phone, message})
    }
};