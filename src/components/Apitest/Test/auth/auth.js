import { post } from '../axios/axios';

const API_LOGIN_URL = '/auth';

export const login = (email, password) => {
    return post(API_LOGIN_URL, {
        email,
        password,
    }).then(res => res.data.data.token);
};
