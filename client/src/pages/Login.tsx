import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [warning, setWarning] = useState("")

    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post("/api/login",
            { username: email, password: password },
            { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                if (res.data == "Successfully authenticated") {
                    navigate("/")
                }
            })
    }

    return (
        <div className="login container col-lg-3 col-md-8 col-sm-12 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <label>Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit}>Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
        </div>

    )
}
