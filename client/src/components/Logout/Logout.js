import { Navigate} from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { useContext, useEffect } from "react"
export function Logout(){
   const {onLogoutClick} = useContext(UserContext)
   useEffect(()=>{
     onLogoutClick()
   },[onLogoutClick])

    return <Navigate to="/"/>

}