import React from "react";
import {UserType} from "../types";
import "../App.css"

export function User(props: UserType) {
    return <div className="userBlock">
        <p>
            Hello <b>{props.name}</b>
        </p>
    </div>
}