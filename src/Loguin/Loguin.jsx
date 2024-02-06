//import { React} from 'react'

import { useNavigate } from "react-router-dom"
// import { useForm } from "../hooks/useForm";
import './Loguin.css'
export const Loguin = () => {
    const Navigate = useNavigate();
    const handleLoguin = () => {
        Navigate('/Reservas', {
            replace: true
        })

    };
    
    return (
        <div className="fondo">
            <div className="centrar">
            <form   className=" p-5 m-5 text-center borroso ">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        name="user_email"
                        className="form-control"
                        placeholder="example@email.com"
                        type="email"
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        name="user_Password"
                        className="form-control"
                        placeholder="Your Password"
                        type="password"
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary m-3 " type="submit" onClick={handleLoguin}>
                        Login
                    </button>
                    <button className="btn btn-secondary " type="submit" onClick={handleLoguin}>
                        Auth
                    </button>
                </div>
            </form>
            </div>
        </div>
            
            
        
    )
}
