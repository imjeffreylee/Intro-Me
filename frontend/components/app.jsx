import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import Navbar from "./navbars/navbar_container";
import MainLandingPageContainer from "./main_landing_page/main_landing_page_container";
import UserProfileContainer from "./users/user_container";

const App = () => (
    <div>
        <Navbar />
        <Switch>
            <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
            <AuthRoute exact path="/" component={MainLandingPageContainer} />
        </Switch>
    </div>
);

export default App;