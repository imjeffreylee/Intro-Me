import { connect } from "react-redux";
import MainLandingPage from "./main_landing_page";

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
    };
};

export default connect(msp)(MainLandingPage);
