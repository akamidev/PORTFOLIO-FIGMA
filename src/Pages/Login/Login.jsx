import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./style.scss"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.token) {
                    localStorage.setItem('token', data.token)
                    navigate("/admin")
                } else {
                    alert("Informations de connexion incorrects")
                }
            })
            .catch(error => console.log("error: " + error))
    }

    return (
        <main className="login">
            <h2>Log In</h2>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                <button className="cta">Se connecter</button>
                <a href="#">Mot de passe oublié</a>
            </form>
        </main>
    );
}

export default Login;