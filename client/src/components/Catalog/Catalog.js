import './catalog.css'
import { useContext } from "react"
import { HotelContext } from "../../contexts/HotelContext"
import { CatalogItem } from "./CatalogItem/CatalogItem"

export function Catalog() {
 const {hotels} = useContext(HotelContext)
  return (

    <div className="catalog-background-container">
      <section className="catalog-page">
        <h1 className="catalog-header">Reviewed Hotels</h1>
      {hotels.map(hotel=><CatalogItem key={hotel._id} {...hotel}/>)}
        
      </section>
    </div>
  )
}