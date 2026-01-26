
import { Link } from "react-router-dom";
import "./register.css"
import { useState } from "react";
function Register() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")  
    const[mobile,setMobile]=useState("") 
    const[pass1,setPass1]=useState("")
    const[pass2,setPass2]=useState("")
    const submitData=()=>{
        let msg=" "
        if(name.length<5){
            msg="Name should be more than 5 charater"
        }
        else if(pass1!==pass2){
            msg="Password is not matching"
        }
        else{
            msg="Successfully Register"
            localStorage.setItem("Name",name)
            localStorage.setItem("Email",email)
            localStorage.setItem("mobile",mobile)
            localStorage.setItem("Password",pass1)
        }
        alert(msg)
    }
    return (
        <div className="test">
            <div className="container" style={{width:"500px"}}>
                <div className="card">
                    <div className="card-title">
                        <h2 className="text-center"><u>Registeration Form</u></h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitData}>
                            <div class="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Mobile</label>
                                <input type="number" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" value={pass1} onChange={(e)=>{setPass1(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label className="form-label">confirm password</label>
                                <input type="password" value={pass2} onChange={(e)=>{setPass2(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
                                <button type="submit" className="btn btn-primary">Register</button>
                            <span> If you already have an account <Link to="/login">login here</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;