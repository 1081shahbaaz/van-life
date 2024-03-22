import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(){

    const hostVan = useOutletContext();

    return (
        <div className="host-van-info">
            <h2>Name: <span>{hostVan.name}</span></h2>
            <h2>Category: <span>{hostVan.type}</span></h2>
            <h2>Description: <span>{hostVan.description}</span></h2>
            <h2>Visibility: <span>Public</span></h2>
        </div>
    )
}