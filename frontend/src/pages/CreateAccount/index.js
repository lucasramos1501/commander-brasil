import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function CreateAccount() {
    return (
        <div id="from-content">
            <h1>Login Magic Commander Brazil</h1>
            <form id="from-create-account">
                <input
                    placeholder="Usuário"
                />
                <input
                    placeholder="Senha"
                    type="password"
                />

                <input
                    placeholder="Confirmação da senha"
                    type="password"
                />

                <input
                    placeholder="E-mail"
                    type="email"
                />
                <input
                    placeholder="Usuário"
                />
                <button>Login</button>
            </form>

            <div id="login-account">
                <span>Já possui uma conta? <Link to="/login">Página de Login</Link></span>
            </div>
        </div>
    );
}