import './register.css'
import { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import { UserContext } from "../../contexts/UserContext"
export function Register() {
    const {onRegisterSubmit}=useContext(UserContext)
    const initialValues = {
        email:"",
        password:"",
        rePassword:""
    }
    const {values, onFormSubmit,onFormValuesChange}=useForm(
 initialValues,
onRegisterSubmit
)
    return (
        <div className="register-background-container">
        <div className="register-container">
            <h3 className="form-name">Register</h3>
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
                <div className="form-outline mb-4">
                    <input value={values.rePassword} onChange={onFormValuesChange} name="rePassword" type="password" id="form2Example3" className="form-control" />
                    <label className="form-label" htmlFor="form2Example3">Repeat Password</label>
                </div>


             


                <button type="submit" className="btn btn-primary btn-block mb-4 register-btn">Register</button>


                
            </form>
        </div>
        </div>

    )
}