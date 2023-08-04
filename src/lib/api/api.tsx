import axios from 'axios';
import { getToken } from '../utils/token';
const url = process.env.REACT_APP_API_URL;

const headers:AxiosHeaders={
  'Content-Type': 'application/json'
};

const api=axios.create({
  baseURL:url
})

api.interceptors.request.use(
  (config)=>{
    const authToken=getToken();
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
  }
)

export const getData = async (endpoint: string) => {
  try {
    const res = await api({
      url: `/${endpoint}`,
      method: 'get',
      // headers
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
};

export const sendData = async (
  endpoint: string,
  method:string='post',
  data: object={},
  params: object={},
  sendToken:boolean=false
) => {

  try {
    const res = await api({
      url: `/${endpoint}`,
      method,
      data: JSON.stringify(data),
      headers
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const deleteData=async (
  endpoint:string
)=>{

  const headers:AxiosHeaders={};

  try {
    const res = await api({
      url: `${url}/${endpoint}`,
      method: 'delete',
      headers
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}