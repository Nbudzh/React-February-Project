import { useForm } from "../../hooks/useForm"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useUser } from "../../hooks/useUser"
import { hotelService } from "../../services/hotelsService"
import { useContext } from "react"
import { HotelContext } from "../../contexts/HotelContext"
export function Edit(){
    const {onEditSubmit}=useContext(HotelContext)
    const request = useUser(hotelService)
    const [initialValues, setInitialValues ] = useState({})
    const {hotelId} = useParams()
    
        const {values,onFormValuesChange,onFormSubmit,changeValues}=useForm({
            hotelName:"",
            hotelPrice:"",
            imgUrl:"",
            address:"",
            review:"",
            rating:0,
            places:""
        },onEditSubmit)
        useEffect(()=>{
            request.getOne(hotelId)
            .then(response=>{
                setInitialValues(response)
                changeValues(response)
            })
            
    
        },[hotelId])
        
        return (
            <div className="create-background-container">
                <div className="create-container">
                    <h3 className="form-name create-name">Create hotel</h3>
                    <form onSubmit={onFormSubmit}>
                        <div className="input-container create">
                            <div className="form-outline mb-4">
                                <input placeholder={initialValues.hotelName} value={values.hotelName} onChange={onFormValuesChange} name="hotelName" type="text" id="form2Example1" className="form-control" />
                                <label className="form-label" htmlFor="form2Example1">Hotel name</label>
                            </div>
                        </div>
    
    
                        <div className="form-outline mb-4">
                            <input placeholder={initialValues.hotelPrice} value={values.hotelPrice} onChange={onFormValuesChange} name="hotelPrice" type="number" id="form2Example2" className="form-control" />
                            <label className="form-label" htmlFor="form2Example2">Price per night</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input placeholder={initialValues.imgUrl} value={values.imgUrl} onChange={onFormValuesChange} name="imgUrl" type="text" id="form2Example3" className="form-control" />
                            <label className="form-label" htmlFor="form2Example3">Image URL</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input placeholder={initialValues.address} value={values.address} onChange={onFormValuesChange} name="address" type="text" id="form2Example3" className="form-control" />
                            <label className="form-label" htmlFor="form2Example3">Address</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input placeholder={initialValues.places} value={values.places} onChange={onFormValuesChange} name="places" type="text" id="form2Example3" className="form-control" />
                            <label className="form-label" htmlFor="form2Example3">Places nearby</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input placeholder={initialValues.rating} value={values.rating} onChange={onFormValuesChange} name="rating" type="number" max="10" id="form2Example3" className="form-control" />
                            <label className="form-label" htmlFor="form2Example3">Rating out of 10</label>
                        </div>
                        <div className="form-outline mb-4">
                        <textarea placeholder={initialValues.review} value={values.review} onChange={onFormValuesChange} name="review" id="textarea" className="form-control" aria-label="With textarea"></textarea>
                        <label className="form-label" htmlFor="textarea">Review</label>
                        </div>
    
    
    
    
    
                        <button type="submit" className="btn btn-primary btn-block mb-4 create-btn">Edit</button>
    
    
    
                    </form>
                </div>
            </div>
        )
}