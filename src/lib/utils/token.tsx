export const getToken = () => localStorage.getItem('authorization');

export const setToken = (token: string) =>
  localStorage.setItem('authorization', token);

export const removeToken = () => localStorage.removeItem('authorization');
