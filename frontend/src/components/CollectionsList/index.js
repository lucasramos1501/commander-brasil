import React, { useEffect } from "react";
import api from '../../services/api';

import "./styles.css";

import CollectionsListItem from "../CollectionsListItem";

export default function CollectionsList() {
    useEffect(()=>{
        api.get('')
    }, [])

    return (
        <div id="collection-list-area">
            <CollectionsListItem />
        </div>
    );
}