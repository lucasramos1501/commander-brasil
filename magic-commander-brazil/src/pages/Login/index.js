import React, { useState } from "react";
import { Link } from "react-router-dom";
import  axios from "axios";

import "./styles.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        await axios.post("http://localhost:3030/login", {
            username,
            password
        })
        event.preventDefault();
    }

    return (
        <div id="from-content">
            <h1>Login Magic Commander Brazil</h1>
            <form id="from-login">
                <input
                    placeholder="Usuário"
                    onChange={event => {setUsername(event.target.value)}}
                    value={username}
                />
                <input
                    placeholder="Senha"
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />

                <button onClick={handleSubmit}>Login</button>
            </form>
            <div id="create-account">
                <span>Novo do site? <Link to="/createaccount">Crie sua conta</Link></span>
            </div>
        </div>
    );
}