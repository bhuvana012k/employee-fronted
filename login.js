import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./register.css"
function Login() {
    let navigate=useNavigate()
    const [email1, setEmail1] = useState("")
    const [pass, setPass] = useState("")
    let x = localStorage.getItem("Email")
    let y = localStorage.getItem("Password")
    const loginData = () => {
        let mgs1 = ""
        if (email1 === x && pass === y) {
            mgs1 = "Logged in succesfully"
            navigate("/data")
        }
        else {
            mgs1 = "Credentials wrong!"
        }
        alert(mgs1)
    }
    return (
        <div>
            <div className="container" style={{ width: "500px" }}>
                <div className="card">
                    <div className="card-title">
                        <h1 className="text-center"><u>Login Page</u></h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={loginData}>
                            <div class="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" value={email1} onChange={(e)=>{setEmail1(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <button type="submit" className="btn btn-primary">submit</button>
                                <span>If you dont have account
                                    <Link to="/"> Register here</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;