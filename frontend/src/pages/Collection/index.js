import React, { useEffect } from "react";

import Navbar from "../../components/Navbar";
import SeacherBar from "../../components/SeacherBar";
import CollectionsList from "../../components/CollectionsList";

import "./styles.css";

export default function Collection() {
    useEffect(()=>{
       console.log("Essa é uma collecion");
    }, [])
    
    return (
        <>
            <Navbar />
            <SeacherBar />
            <div id="collection-area">
                <CollectionsList />
            </div>
        </>
    );
}