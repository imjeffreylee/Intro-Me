import { connect } from "react-redux";
import { signUp, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = (state) => {
    return {
        errors: state.errors.session,
        formType: "signup",
    };
};

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signUp(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(msp, mdp)(SessionForm);
