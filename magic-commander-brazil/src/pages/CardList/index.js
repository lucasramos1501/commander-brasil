import React from "react";

import Navbar from "../components/Navbar";
import SeacherBar from "../components/SeacherBar";

export default function CardList() {
    return (
        <div id="cardlist-area"> 
            <Navbar/>
            <SeacherBar/>
        </div>
    );
}