import { requestTokenBinder } from "./requester";
const baseUrl="http://localhost:3030/data/hotels"

export function hotelService(token){
    const request = requestTokenBinder(token)
    return{
        createHotel: (data)=>request.post(`${baseUrl}`,data),
        getAll:()=>request.get(`${baseUrl}`),
        getOne:(hotelId)=>request.get(`${baseUrl}/${hotelId}`),
        deleteOne:(hotelId)=>request.del(`${baseUrl}/${hotelId}`),
        editOne:(hotelId,data)=>request.put(`${baseUrl}/${hotelId}`,data)
    }

}