import React from "react";

import Navbar from "../../components/Navbar";
import SeacherBar from "../../components/SeacherBar";

export default function User() {
    return (
        <div id="user-area"> 
            <Navbar/>
            <SeacherBar/>
        </div>
    );
}