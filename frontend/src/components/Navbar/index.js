import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Navbar() {
    return (
        <div id="menu-area">
            <nav>
                <div id="title-area">
                    <Link to="/home">
                        <h1 id="site-title">Magic Commander Brazil</h1>
                    </Link>
                </div>
                <ul id="menu-ul">
                    <li className="menu-li"><Link to="/collections">Coleções</Link></li>
                    <li className="menu-li"><Link to="/cardlists">Listas</Link></li>
                    <li className="menu-li"><Link to="/user">Conta</Link></li>
                    <li className="menu-li"><Link to="/exit">Sair</Link></li>
                </ul>
            </nav>
        </div>
    );
}