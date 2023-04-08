import './homePage.css'
import { Link } from 'react-router-dom'
export function HomePage(){
    return(
        <div className="homepage-title-container">
<Link className='homepage-link' to="/catalog">
        <h1 className="homepage-title">Explore hotels</h1>
        </Link>
        <h2 className="homepage-subheading">Share the expirience</h2>
        <h3 className="homepage-miniheading">Leave a review</h3>
        </div>
    )
}