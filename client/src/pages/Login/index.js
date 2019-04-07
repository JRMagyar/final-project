import React from "react";
import { FlexCol } from "../../components/FlexWrap/index";
import "./style.css"

function Login(){
    return (
        <div className="hero-bkg-animated">
            <FlexCol>
                <article className="login-area">
                    <div className="title">
                        <h1>
                            welcome to uncle
                        </h1>
                        <p>
                            a friendly (but not to friendly) household management app
                        </p>
                    </div>
                    <form className="signin-form">
                        <input type="text" name="username" placeholder="enter username"/>
                        <input type="password" name="password" placeholder="enter password"/>
                        <input type="submit" value="Submit" />
                    </form>
                    <p>or</p>
                    <article class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></article>
                </article>
            </FlexCol>
        </div>
    );
}

export default Login;