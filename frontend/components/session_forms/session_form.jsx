import React from 'react';
import merge from "lodash/merge";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            status: "",
            industry: "",
            role: "",
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = merge({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    renderErrors() {
        if (this.props.errors.length !== 0) {
            return (
                <ul className="err-ul">
                    {this.props.errors.map((err, i) => {
                        return (
                            <li key={i} className="err-msg">
                                {err} <span>¯\_(ツ)_/¯</span>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    render() {
        let sessionForm;
        let formSwitcher;
        if (this.props.formType === "login") {
            sessionForm = (
                <div className="login-form">
                    <h2>LOGIN</h2>
                    <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.update("email")}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update("password")}
                    />
                    <input type="submit" value="GO!" />
                </div>
            )
            formSwitcher = (
                <div>
                    <p>Not with us yet?</p>
                    <Link to="/signup" onClick={this.props.clearErrors}>SIGN UP</Link>
                </div>
            )
        } else {
            sessionForm = (
                <div className="signup-form">
                    <h2>SIGN UP</h2>
                    <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.update("email")}
                    />
                    <input
                        type="text"
                        placeholder="First name"
                        value={this.state.first_name}
                        onChange={this.update("first_name")}
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        value={this.state.last_name}
                        onChange={this.update("last_name")}
                    />
                    <input
                        type="text"
                        placeholder="Status"
                        value={this.state.status}
                        onChange={this.update("status")}
                    />
                    <input
                        type="text"
                        placeholder="Industry"
                        value={this.state.industry}
                        onChange={this.update("industry")}
                    />
                    <input
                        type="text"
                        placeholder="Role"
                        value={this.state.role}
                        onChange={this.update("role")}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update("password")}
                    />
                    <input type="submit" value="GO!" />
                </div>
            )
            formSwitcher = (
                <div>
                    <p>Already have an account?</p>
                    <Link to="/login" onClick={this.props.clearErrors}>LOGIN</Link>
                </div>
            )
        }

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>{sessionForm}</form>
                {formSwitcher}
            </div>
        )
    }
}

export default SessionForm;