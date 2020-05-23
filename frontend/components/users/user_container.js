import { connect } from "react-redux";
import { fetchUser } from "../../actions/session_actions";
import UserProfile from "./user";

const msp = (state, ownProps) => {
    let userId = ownProps.match.params.userId;
    let user = state.entities.users[userId];

    return {
        user,
    };
};

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchUser: (id) => dispatch(fetchUser(id)),
    };
};

export default connect(msp, mdp)(UserProfile);