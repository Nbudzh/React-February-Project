import { createContext,useContext,useEffect,useState, } from "react";
import { useNavigate } from "react-router-dom";
import { hotelService } from "../services/hotelsService";
import { UserContext } from "./UserContext";
export const HotelContext = createContext()
export function HotelProvider(
    {
        children
    }
){
    const {user} = useContext(UserContext)
    const [hotels,setHotels] = useState([])
    const navigate = useNavigate()
    const onHotelsChange = hotelService(user.accessToken)
    useEffect(()=>{
        onHotelsChange.getAll()
        .then(response=>setHotels(response))
         
        },[])
    async function onCreateSubmit(values){
        const response = await onHotelsChange.createHotel(values)
        setHotels(state=>([...state,response]))
        navigate("./catalog")
        
    
      }
      async function deleteHotelState(hotelId){
        setHotels(state=>state.filter(x=>x._id!==hotelId))
      }
      async function onEditSubmit(values){
       const result = await onHotelsChange.editOne(values._id,values)
       setHotels(state=>state.map(x=>x._id===values._id ? result : x))
        navigate(`/details/${values._id}`)
      }
    const context={
        onEditSubmit,
        deleteHotelState,
        onCreateSubmit,
        hotels
    }
    return(
       <HotelContext.Provider value={context}>
        {children}
       </HotelContext.Provider>
    )
}