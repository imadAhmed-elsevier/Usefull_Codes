import React from "react";
import {useParams} from "react-router";

function User() {
    const {username} = useParams();
    console.log(username);
    return (<div>User {username}</div>);
}

export default User;