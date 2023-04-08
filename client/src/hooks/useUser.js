import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
export function useUser(tokenBinderFunction){
const {token} = useContext(UserContext)
const request = tokenBinderFunction(token)
return request
}