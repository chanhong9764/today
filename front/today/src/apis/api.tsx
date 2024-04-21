import axios, { Axios, AxiosResponse } from 'axios';

export const instance: Axios = axios.create({
  baseURL: 'https://localhost:',
});

export const responseBody = (response: AxiosResponse) => response.data;
