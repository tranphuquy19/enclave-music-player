import React, { Component } from 'react';
import './Login.css'
import { NavLink } from 'react-router-dom';
import { register } from './UserFunctions';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            password_confirm: "",
            registrationErrors: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            password_confirm: this.password_confirm
        }
        register(newUser).then(res => {
            if (res) {
                this.props.history.push('/signin')
            }
        })
    }
    // handleSubmit(event) {
    //     const { username, password, password_confirm } = this.state;
    //     axios
    //         .post(
    //             "https://api.doraneko.tk/register",
    //             {
    //                     username: username,
    //                     password: password,
    //                     password_confirm: password_confirm
    //             },

    //             // { withCredentials: true }
    //         )

    //         .then(response => {
    //             console.log(response)
    //             if (response.data.status === "created") {
    //                 this.props.handleSuccessfulAuth(response.data);
    //             }
    //         })
    //         .catch(error => {
    //             console.log("registration error", error);
    //         });
    //     event.preventDefault();
    // }

    render() {
        return (
            <div className="container" id="container">
                <div className="form-container sign-up-container" >
                    {/* Sign Up form code goes here  */}
                    <form noValidate onSubmit={this.handleSubmit} >
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required />
                        <input
                            type="password"
                            name="password_confirm"
                            placeholder="Password Confirm"
                            value={this.state.password_confirm}
                            onChange={this.handleChange}
                            required />
                        <button className="button" type="submit">Sign Up</button>

                    </form>
                </div >
                <div className="overlay-container">
                    {/* The overlay code goes here */}
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
                    </p>
                            <NavLink to="signin" className="ghost button" id="signIn" >Sign In</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;