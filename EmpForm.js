import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
let API_URL = "http://localhost:3007/Employe"
function EmpForm() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [city, setCity] = useState("")
    let navigate=useNavigate()
    const postData = (e) => {
        e.preventDefault()
        let data = { name, email, mobile, city }
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-type":"application/json" },
            body:JSON.stringify(data)
        })
            .then(() => {
                alert("Posted Successfully")
                navigate('/data')
            })
            .catch((err) => {
                console.log("ERROR:", err)
            })
    }
    return (
        <div>
            <div className="container" style={{ width: "400px" }}>
                <div className="card">
                    <div className="card-title">
                        <h1 className="text-center">Add New From</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label className="form-label">Id</label>
                                <input type="number" value={id} disabled="disabled" onChange={(e) => { setId(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile</label>
                                <input type="number" value={mobile} onChange={(e) => { setMobile(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">City</label>
                                <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link to="/data" className="btn btn-danger">Back</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpForm;