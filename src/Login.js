import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./index.css"

function Login() {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    }

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Voce está Logado");
            setUser({
                name: details.name,
                email: details.email
            })
        }
        else {
            console.log("Algo de errado não está certo...")
            setError("Algo de errado não está certo...")
        }
    }
    const Logout = () => {
        setUser({ name: "", email: "" })
    }

    return (

        <div className="Login">
            {(user.email != "")
                ? (
                    <div className="welcome">
                        <h2>Bem-vindo(a), <span>{user.name}</span></h2>
                        <button onClick={Logout} >Logout</button>
                    </div>

                ) : (
                    <LoginForm Login={Login} error={error} />
                )
            }</div>
    )
}
export default Login