import React, {useState} from "react";


export default function Details(props) {
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */

    return (
        <div className="details">
            <h3 className="heading">{props.schoolname}</h3>
            <div className="tagbox">
                <p className="tag"> {props.accessmod} </p>
            </div>
            <img src={props.img}/>
            <p className="detalles">{props.desc}</p>
            <p className="stats">Admissions rate: {props.rate}%</p>
            <p className="stats">Undergrad class size: {props.pop} students</p>
        </div>
    )
}