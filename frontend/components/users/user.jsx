import React from "react";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.match.params.userId,
        };
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.fetchUser(userId);
    }

    render() {
        if (!this.props.user) {
            return null;
        }

        // return (

        // )
    }
}

export default UserProfile;