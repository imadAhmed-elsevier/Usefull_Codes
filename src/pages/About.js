import React from "react";
import {useHistory, useLocation} from "react-router";

function About() {
    //using location hook
    const myLocation = useLocation();
    //Using history hook
    const myHistory  = useHistory();


    return (
        <>  {/* This is a fragment and its needed here because React needs to have a parent element. */}
        
            <div>About</div>
            <div>This location is: {myLocation.pathname}</div>
            <div>The parent is: {myLocation.state.from}</div>
            <button class="button" onClick={goBackHandler}> Go BAck </button>

        </>
    );

    function goBackHandler() {
        myHistory.goBack();
    }
}

export default About;