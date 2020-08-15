import React, { Component } from 'react';
import axios from 'axios';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            password_confirm: "",
            registrationErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        const { username, password, password_confirm } = this.state;
        axios
            .post(
                "https://api.doraneko.tk/register",
                {
                        username: username,
                        password: password,
                        password_confirm: password_confirm
                },
                
                // { withCredentials: true }
            )
            
            .then(response => {
                console.log(response)
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("registration error", error);
            });
        event.preventDefault();
    }
    render() {
        return (
            <div className="form-container sign-up-container" >
                {/* Sign Up form code goes here  */}
                <form onSubmit={this.handleSubmit} >
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
                    <button type="submit">Sign Up</button>
                    
                </form>
            </div >
        );
    }
}

export default Register;