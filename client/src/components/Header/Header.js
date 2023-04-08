import './header.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
export function Header() {
  
  const { isLoggedIn,email,onLogoutClick } = useContext(UserContext)
  
 
  
  return (
    <div className='nav-container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        {!isLoggedIn && <a className="navbar-brand" >Welcome, guest</a>}
          {isLoggedIn && <a className="navbar-brand" >Welcome, {email.split("@")[0]}</a>}
          <a className="navbar-brand" ></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">All Hotels</Link>
              </li>
              {!isLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
              {!isLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li> }
              


              { isLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/create-hotel">Create a hotel</Link>
              </li> }

             {isLoggedIn && <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
              </li>} 


            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}