import React from "react";
import { FlexCol } from "../../components/FlexWrap/index";
import "./style.css"
import Axios from "axios";


class Login extends React.Component {

    state = {
        redirectToRef: false
    }

    login = (evn) => {
        evn.preventDefault();
        console.log("get the user info from db");
        Axios.get('/users')
            .then(function (response) {
            console.log(response.data);
        })
    }

    render(){

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
                            <input type="password" name="password" autoComplete="on" placeholder="enter password"/>
                            <input type="submit" onClick={this.login} value="Login" />
                        </form>
                        {/* <p>or</p>
                        <article class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></article> */}
                    </article>
                </FlexCol>
            </div>
        );
    }
}

export default Login;