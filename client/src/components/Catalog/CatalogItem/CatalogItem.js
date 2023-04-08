import { Link } from "react-router-dom"
export function CatalogItem(
    
        hotel
    
){
return(
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src={hotel.imgUrl}
          alt="Trendy Pants and Shoes"
          className="img-fluid rounded-start"
        />

      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{hotel.hotelName}</h5>
          <p className="card-text">
           {hotel.address}
          </p>
          <p className="card-text">
            <small className="text-muted">{hotel.places}</small>
          </p>
          <Link to={`/details/${hotel._id}`}><button type="button" className="btn btn-primary btn-details">Details</button></Link>
        </div>
      </div>
    </div>
  </div>
)
}