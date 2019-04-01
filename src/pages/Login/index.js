import React from "react";
import FlexWrap from "../../components/FlexWrap/index";
import "./style.css"

function Login(){
    return (
        <FlexWrap>
            <article className="title-area">
                <h1>
                    household <br></br> 
                    management
                </h1>
            </article>
            <article class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></article>
        </FlexWrap>
    );
}

export default Login;