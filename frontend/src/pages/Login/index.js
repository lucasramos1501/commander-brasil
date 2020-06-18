import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();

        await api.post("/login", {
            username,
            password,
        }).then(response => {
            console.log(response.data);
            history.push('/home', { userLogeded: response.data });
        })
    }

    return (
        <div id="from-content">
            <h1>Login Magic Commander Brazil</h1>
            <form id="from-login">
                <input
                    placeholder="Usuário"
                    onChange={event => { setUsername(event.target.value) }}
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