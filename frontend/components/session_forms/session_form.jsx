import React from 'react';
import merge from "lodash/merge";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
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
        let formHeader;
        let formSwitcher;
        if (this.props.formType === "login") {
            formHeader = (
                <h2>LOGIN</h2>
            )
            formSwitcher = (
                <div>
                    <p>Not with us yet?</p>
                    <Link to="/signup">SIGN UP</Link>
                </div>
            )
        } else {
            formHeader = (
                <h2>SIGN UP</h2>
            )
            formSwitcher = (
                <>
                    <p>Already have an account?</p>
                    <Link to="/login">LOGIN</Link>
                </>
            )
        }

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    {formHeader}
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                </form>
                {formSwitcher}
            </div>
        )
    }
}

export default SessionForm;