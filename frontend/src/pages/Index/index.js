import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import SeacherBar from "../../components/SeacherBar";

export default function Index() {
    const [ data, setData ] = useState({});
    
    useEffect(()=>{
        
    }, [])
    
    return (
        <>
        <Navbar/>
        <div id="index-area"> 
            <SeacherBar/>
        </div>
        </>
    );
}