import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function EmpData() {
    const [data, setData] = useState("")
    const [value, setValue] = useState("")
    const [sort, setSort] = useState("")
    let navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:3007/Employe", { method: "GET" })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
            })
            .catch((err) => {
                console.log("Error:", err)
            })
    }, [])
    const editData = (id) => {
        console.log(id)
        navigate("/edit/" + id)
    }
    const deleteData = (id) => {
        fetch("http://localhost:3007/Employe/" + id, { method: "DELETE" })
            .then(() => {
                alert("Deleted Successfully")
                window.location.reload()
            })
            .catch((err) => {
                console.log("error:", err)
            })
    }
    const filterData = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3007/Employe?q=${value}`, { method: "GET" })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
            })
            .catch((err) => {
                console.log("error", err)
            })
    }
    let option = ['id', 'name', 'email', 'mobile', 'city']
    const sortData = (e) => {
        e.preventDefault()
        let value = e.target.value
        setSort(value)
        fetch(`http://localhost:3007/Employe?_sort=${value}&_order=asc`, { method: "GET" })
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                setData(resp)
            })
            .catch((err) => {
                console.log("error", err)
            })
    }
    const handleLogout = () => {
        alert("Logout successful")
        navigate("/login")
    }

    return (
        <div>
            <div className="container"style={{padding:"10px"}}>
                <div className="card">
                    <div className="card-title">
                        <h1 className="text-center">Employee Management System</h1>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Link className="btn btn-success" style={{ width: "200px", height: "40px" }} to="/form">ADD NEW(+)</Link>
                        <select className="form-select" style={{ width: "200px", height: "40px" }} value={sort} onChange={sortData} aria-label="Default select example">
                            <option selected>Sort</option>
                            {option.map((item) => (
                                <option>{item}</option>
                            ))}
                        </select>
                        <form onSubmit={filterData}>
                            <div className="mb-3" style={{ width: "400px" }}>
                                <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="Search filter..!" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </form>
                        <button className="btn btn-success" style={{ width: "200px", height: "40px" }} onClick={handleLogout}>
                            Logout
                        </button>

                    </div>
                    <div className="card-body" style={{textAlign:"center"}}>
                        <table className="table table-striped table-hover table-bordered table-sm">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.map((item) => (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.city}</td>
                                            <td>
                                                <button onClick={() => { editData(item.id) }} className="btn btn-primary btn-sm me-2">Edit</button>
                                                <button onClick={() => { deleteData(item.id) }} className="btn btn-danger btn-sm"> Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpData;