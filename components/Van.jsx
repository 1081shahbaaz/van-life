import React from "react";
import { Link } from "react-router-dom";

export default function Van(props){
    return(
        <div className="col-md-6 mb-3">
            <Link className="van--detail" to={props.id} state={{search: `?${props.searchParams.toString()}`, type: props.typeFilter}}>
            <div className="card">
                <div className="card-body">
                <img src={props.imageUrl} />
                <div className='van--info'>
                    <h2>{props.name}</h2>
                    <h2>${props.price} <br></br><span>/day</span></h2>
                </div>
                <button className={`btn-${props.type}`}>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</button>
                </div>
            </div>
            </Link>
        </div>
       
    )
}