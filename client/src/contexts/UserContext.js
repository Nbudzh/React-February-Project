import { createContext } from "react";
import { useState } from "react";
import {registerUser} from "../services/profileService"
import { useNavigate } from "react-router-dom";
export const UserContext = createContext()
export function UserProvider(
    {
        children
    }
){
    const [user, setUser] = useState({})
    const navigate=useNavigate()
    const onUserChange = registerUser(user.accessToken)
    
   
    
  
  
    async function onRegisterSubmit(data) {
  
      const { email, password, rePassword } = data
      if (password !== rePassword) {
        alert(`Passwords don't match`)
        return {}
      } else {
        
  
        try {
          const response = await onUserChange.register({ email, password })
          setUser(response)
          navigate("/catalog")
  
        } catch(e) {
          alert(`Something went wrong, please try again`)
        }
      }
    }
  
    async function onLoginSubmit(values) {
      
      try {
        const response = await onUserChange.login(values)
        setUser(response)
        navigate("/catalog")
      } catch(e) {
        alert(`Wrong username or password`)
      }
    }
   
    function onLogoutClick(){
     setUser({})
     return(
      onUserChange.logout()
     )
    }
  
    const context = {
      isLoggedIn: !!user._id,
      email: user.email,
      userId: user._id,
      token:user.accessToken,
      onLogoutClick,
      onLoginSubmit,
      onRegisterSubmit,
      user
}
return(
    <UserContext.Provider value={context}>
        {children}
    </UserContext.Provider>
)
}