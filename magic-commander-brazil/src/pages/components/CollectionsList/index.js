import React from "react";

import "./styles.css";

import CollectionsListItem from "../CollectionsListItem";

export default function CollectionsList() {
    return (
        <div id="collection-list-area">
            <CollectionsListItem />
            <CollectionsListItem />
            <CollectionsListItem />
            <CollectionsListItem />
        </div>
    );
}