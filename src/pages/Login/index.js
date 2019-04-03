import React from "react";
import { FlexCol } from "../../components/FlexWrap/index";
import "./style.css"

function Login(){
    return (
        <FlexCol>
            <article className="title-area">
                <h1>
                    household <br></br> 
                    management
                </h1>
            </article>
            <article class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></article>
        </FlexCol>
    );
}

export default Login;