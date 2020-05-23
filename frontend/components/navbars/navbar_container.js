import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Navbar from "./navbar";

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(mdp)(Navbar);