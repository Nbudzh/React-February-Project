import { requestTokenBinder } from "./requester";
const baseUrl="http://localhost:3030/data/comments"
export function onCommentChange(token){
const request = requestTokenBinder(token)
const getAll = async (hotelId) => {
    const searchQuery = encodeURIComponent(`hotelId="${hotelId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;}
return{
    createComment:(hotelId,comment)=>request.post(baseUrl,{hotelId,comment}),
    getAll
    
}
}
