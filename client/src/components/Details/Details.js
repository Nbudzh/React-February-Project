import './details.css'
import { useEffect, useState } from "react"
import { hotelService } from "../../services/hotelsService"
import { Link, useParams } from "react-router-dom"
import { useUser } from "../../hooks/useUser"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import { CommentItem } from "./CommentItem/CommentItem"
import { onCommentChange } from "../../services/commentService"
import { HotelContext } from "../../contexts/HotelContext"
export function Details() {
    const [comment,setComment] = useState(``)
    const [allComents,setAllComents] = useState([])
    const [detailsHotel, setDetailsHotel] = useState({})
    const { hotelId } = useParams()
    const request = useUser(hotelService)
    const commentRequest = useUser(onCommentChange)
    const { userId, isLoggedIn, } = useContext(UserContext)
    const {deleteHotelState} = useContext(HotelContext)
    const navigate = useNavigate()
    useEffect(() => {
        request.getOne(hotelId)
        .then(response => setDetailsHotel(response))
       }, [hotelId])
    useEffect(()=>{
         commentRequest.getAll(hotelId)
        .then(result=>setAllComents(result))
        
    },[hotelId])
    
    async function deleteOneHotel() {
        await request.deleteOne(hotelId)
        deleteHotelState(hotelId)
        navigate("/catalog")
    }
    async function onCreateCommentClick(){
        await commentRequest.createComment(hotelId,comment)
        commentRequest.getAll(hotelId)
        .then(result=>setAllComents(result))
        setComment(``)
    }
    


    return (
        <div className="details-background-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="project-info-box mt-0">
                            <h5>{detailsHotel.hotelName}</h5>
                            <p className="mb-0">Hotel review</p>
                        </div>

                        <div className="project-info-box">
                            <p><b>Location:</b> {detailsHotel.address}</p>
                            <p><b>Rating:</b> {detailsHotel.rating} of 10</p>
                            <p><b>Price per night:</b> {detailsHotel.hotelPrice}$</p>
                            <p><b>Places nearby:</b> {detailsHotel.places}</p>
                            <p className="mb-0"><b>Review:</b> {detailsHotel.review}</p>
                        </div>


                    </div>

                    <div className="col-md-7">
                        <img src={detailsHotel.imgUrl} alt='hotel' className="rounded" />
                        {detailsHotel._ownerId === userId && <div className="project-info-box">
                            <Link to={`/catalog/${hotelId}/edit`}><button type="button" className="btn btn-primary">Edit</button></Link>
                            <button onClick={deleteOneHotel} type="button" className="btn btn-dark">Delete</button>

                        </div>}

                    </div>
                </div>
            </div>
            {isLoggedIn && <div className="row d-flex justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-0 border">
                        <div className="card-body p-4">
                            <div className="form-outline mb-4">
                                <input value={comment} onChange={(e)=>setComment(e.target.value)} type="text" id="addANote" className="form-control" placeholder="Type comment..." />
                                <button onClick={onCreateCommentClick} className="form-label" htmlFor="addANote">+ Add comment</button>
                            </div>

                            {allComents.map(comment=><CommentItem key={comment._id} {...comment}/>)}

                           
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
} 