import React from "react";
import '../styles/SignIn.css';
import axios from 'axios';

const SignIn = () => {

    interface UserInfo {
        username: string;
        password: string;
    }

    // TODO make a post request to the server with the user info
    const handleSignin = (user: UserInfo) => {
        axios.post('/api/signin', user)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    // put username and password in a json object and console.log it
    const handleClick = () => {
        const username = (document.querySelector('.input-box-username') as HTMLInputElement).value;
        const password = (document.querySelector('.input-box-password') as HTMLInputElement).value;
        const user = {
            username: username,
            password: password
        }
        console.log(user);
    }


    return (
        <div>
            <h1 className="sign-in-title">Sign In</h1>
            <div className="box-div">
                <input className="input-box-username" type="text" placeholder="Username" />
                <input className="input-box-password" type="password" placeholder="Password" />
                <button className="sign-in-button" onClick={handleClick}>Sign In</button>
            </div>
        </div>
    );
};

export default SignIn;
