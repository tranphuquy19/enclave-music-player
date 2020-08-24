import React, { Component } from 'react';
import './Login.css'
import { NavLink, Redirect } from 'react-router-dom';
import { register } from '../../../store/actions/UserActions';
import { connect } from 'react-redux';
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
        this.props._registerUser(newUser)
    }

    render() {
        const { token } = this.props.newUser;
        return (
            <>
            {token ? <Redirect to="/signin" /> : <></>}
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
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        newUser: state.userReducer
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        _registerUser: (newUser) => {
            dispatch(register(newUser));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);