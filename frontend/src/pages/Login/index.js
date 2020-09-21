import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import auth from "../../services/auth";

import "./styles.css";
import magic from "../../Assets/magic-the-gathering-jogo.png";

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
            auth.login(response.data);
            history.push("/home");
        }).catch(error => {
            alert("Usuário ou/e senha inválidos, tente novamente ou realize o cadastro.");
            throw error;
        })
    }

    return (
        <div id="login-wapper">
            <div id="from-content">
                <h1 id="title-app"> Magic Commander Brazil</h1>

                <form id="form-login">
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
            
            <img src={magic} id="login-magic-img"/>
        </div>
    );
}