import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import auth from "../../services/auth";

import "./styles.css";
import magic from "../../assets/magic-the-gathering-jogo.png";

export default function CreateAccount() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();


    async function handleSubmit(event) {
        event.preventDefault();

        const passwordInputResult = password === passwordVerify ? true : false;
        console.log(passwordInputResult);
        
        if (passwordInputResult) {
            await api.post("/user", {
                username,
                password,
                email
            }).then(response => {
                auth.login(response.data);
                history.push("/home");
            }).catch(error => {
                alert("Usuário ou/e senha inválidos, tente novamente ou realize o cadastro.");
            })
        }
        
        alert("As senhas não coincidem")
    }

    return (
    <div id="login-wapper">
            <div id="from-content">
            <h1>Magic Commander Brasil</h1>
            <form id="form-create-account">
                <input
                    placeholder="Usuário"
                    onChange={event => { setUsername(event.target.value) }}
                />
                <input
                    placeholder="Senha"
                    type="password"
                    onChange={event => { setPassword(event.target.value) }}
                />

                <input
                    placeholder="Confirmação da senha"
                    type="password"
                    onChange={event => { setPasswordVerify(event.target.value) }}
                />

                <input
                    placeholder="E-mail"
                    type="email"
                    onChange={event => { setEmail(event.target.value) }}
                />
                <button onClick={handleSubmit}>Cadastrar</button>
            </form>

            <div id="login-account">
                <span>Já possui uma conta? <Link to="/login">Página de Login</Link></span>
            </div>
        </div>
        <img src={magic} id="login-magic-img"/>
    </div>
    );
}