import jwt from 'jsonwebtoken';

const JWT_TOKEN_NAME = 'jwtToken-jr-lms';

export const getToken = () => localStorage.getItem(JWT_TOKEN_NAME);

export const setToken = token => localStorage.setItem(JWT_TOKEN_NAME, token);

export const removeToken = () => localStorage.removeItem(JWT_TOKEN_NAME);

export const isLoggedIn = () => {
    const token = localStorage.getItem(JWT_TOKEN_NAME);

    if (!token) return false;

    const decodedToken = jwt.decode(token);
    const expirationTime = decodedToken.exp * 1000;
    const isExpired = Date.now() - expirationTime > 0;

    return !isExpired;
};
