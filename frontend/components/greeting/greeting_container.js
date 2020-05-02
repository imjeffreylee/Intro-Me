import { connect } from "react-redux";
import Greeting from "./greeting";

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
    };
};

export default connect(msp)(Greeting);
