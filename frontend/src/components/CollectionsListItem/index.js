import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function CollectionsListItem(props) {
    return (
        <Link to="/home">
            <div className="collection-list-item">
                <div id="collections-item-name">Lista Número Um</div>
                <div id="collections-item-color">GWBRU</div>
            </div>
        </Link>
    );
}