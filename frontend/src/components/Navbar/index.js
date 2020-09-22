import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import auth from "../../services/auth";

export default function Navbar() {
    return (
        <div id="menu-area">
            <nav>
                <div id="title-area">
                    <Link to="/home">
                        <h1 id="site-title">Magic Commander Brasil</h1>
                    </Link>
                </div>
                <ul id="menu-ul">
                    <li className="menu-li">
                        <Link to="/collections">Coleções</Link>
                    </li>
                    <li className="menu-li">
                        <Link to="/cardlists">Listas</Link>
                    </li>
                    <li className="menu-li">
                        <Link to="/user">Conta</Link>
                    </li>
                    <li className="menu-li"
                        onClick={auth.logout}
                    >
                        <Link to="/login">Sair</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}