import {requestTokenBinder} from './requester'
const baseUrl="http://localhost:3030"
export function registerUser(token){

   const request=requestTokenBinder(token)
    return{
    register:(data)=>request.post(`${baseUrl}/users/register`,data),
    login:(data)=>request.post(`${baseUrl}/users/login`,data),
    logout:()=>request.get(`${baseUrl}/users/logout`)
    }
} 
