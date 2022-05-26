import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [warning, setWarning] = useState("")

    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post("/api/register",
            { username: email, password: password },
            { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                if (res.data == "Successfully registered") {
                    navigate("/login")
                }
            })
    }

  return (
    <div className="login container col-lg-3 col-md-8 col-sm-12 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Register</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <label>Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit}>Sign in</button>
                <h2>{warning}</h2>
                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            </form>
        </div>
  )
}
