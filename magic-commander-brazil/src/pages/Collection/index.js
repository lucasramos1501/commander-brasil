import React, { Fragment } from "react";

import "./styles.css";

import Navbar from "../components/Navbar";
import SeacherBar from "../components/SeacherBar";
import CollectionsList from "../components/CollectionsList";

export default function Collection() {
    return (
        <Fragment>
            <Navbar />
            <SeacherBar />
            <div id="collection-area">
                <CollectionsList />
            </div>
        </Fragment>

    );
}