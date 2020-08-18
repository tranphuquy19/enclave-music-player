import React, { Component } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';
import { login } from './UserFunctions';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            loginErrors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        login(user).then(res => {
            if(res){
                this.props.history.push('/')
            }
        })
    }
    // handleSubmit(event) {
    //     const { username, password } = this.state;
    //     axios
    //         .post(
    //             "https://api.doraneko.tk/login",
    //             {
    //                     username: username,
    //                     password: password,
    //             },
    //             // { withCredentials: true }
    //         )
    //         .then(response => {
    //             console.log("res from login", response);
    //             // if (response.data.status === "created") {
    //             //     this.props.handleSuccessfulAuth(response.data);
    //             // }
    //         })
    //         .catch(error => {
    //             console.log("login error", error);
    //         });
    //     event.preventDefault();
    // }
    render() {
        return (
            <>
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        {/* Sign In form code goes here  */}
                        <form noValidate onSubmit={this.handleSubmit}>
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

                            <button className="button" type="submit">Log in</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        {/* The overlay code goes here */}
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <NavLink to="/signup" className="ghost button" id="signUp" >Sign Up</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default LoginPage;