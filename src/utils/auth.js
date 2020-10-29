import jwt from 'jsonwebtoken';

const AUTH_TOKEN = 'AUTH_TOKEN';

export const getToken = () => localStorage.getItem(AUTH_TOKEN);

export const setToken = (token) => localStorage.setItem(AUTH_TOKEN, token);

export const removeToken = () => localStorage.removeItem(AUTH_TOKEN);

export const isLoggedIn = () => {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (!token) return false;

  const decodedToken = jwt.decode(token);
  const expirationTime = decodedToken.exp * 1000;
  const isExpired = Date.now() - expirationTime > 0;

  return !isExpired;
};
