import { Link, useNavigate, useParams} from "react-router-dom";
import { useState, useEffect } from "react";
function EmpEdit() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [city, setCity] = useState("")
    const {empid}=useParams()
    let navigate=useNavigate()
    useEffect(() => {
        fetch("http://localhost:3007/Employe/"+empid,{ method: "GET" })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setId(resp.id)
                setName(resp.name)
                setEmail(resp.email)
                setMobile(resp.mobile)
                setCity(resp.city)
            })
    }, [empid])
    const postData = (e) => {
        e.preventDefault()
        let data = { name, email, mobile, city }
        fetch("http://localhost:3007/Employe/"+empid, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert("Update Successfully")
                navigate("/data")
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
                        <h1 className="text-center">Edit Employee Data </h1>
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
                            <button type="submit" className="btn btn-primary">Update</button>
                            <Link to="/data" className="btn btn-danger">Back</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpEdit;