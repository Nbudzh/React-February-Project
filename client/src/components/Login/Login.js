import './login.css'
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
export function Login() {
    const {onLoginSubmit} = useContext(UserContext)

    const {values,onFormSubmit,onFormValuesChange}=useForm({
        email:"",
        password:""
    },onLoginSubmit)
    return (
        <div className="login-background-container">
        <div className="login-container">
            <h3 className="form-name">Login</h3>
            <form onSubmit={onFormSubmit}>
                <div className="input-container">
                <div className="form-outline mb-4">
                    <input value={values.email} onChange={onFormValuesChange} name="email" type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>
                </div>


                <div className="form-outline mb-4">
                    <input value={values.password} onChange={onFormValuesChange} name="password" type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>


             


                <button type="submit" className="btn btn-primary btn-block mb-4 btn-login">Sign in</button>


                <div className="text-center">
                    <p>Not a member? <Link to="/register">Register</Link></p>
                    
                    
                </div>
            </form>
        </div>
        </div>
    )
}