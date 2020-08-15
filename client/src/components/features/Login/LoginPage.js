import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import Register from './Register';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick = () => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        const { username, password } = this.state;
        axios
            .post(
                "https://api.doraneko.tk/login",
                {
                    user: {
                        username: username,
                        password: password,
                    }
                },

                { withCredentials: true }
            )

            .then(response => {
                console.log("res from login", response);
                // if (response.data.status === "created") {
                //     this.props.handleSuccessfulAuth(response.data);
                // }
            })
            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();
    }
    render() {
        return (
            <>
                <div className="container" id="container">
                    <Register />
                    <div className="form-container sign-in-container">
                        {/* Sign In form code goes here  */}
                        <form action="#">
                            <h1>Sign in</h1>
                            <input type="text"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required />
                            <input type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required />

                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        {/* The overlay code goes here */}
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>
                                    To keep connected with us please login with your personal info
                                </p>
                                <button className="ghost" id="signIn" onClick={this.handleOnClick}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={this.handleOnClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default LoginPage;