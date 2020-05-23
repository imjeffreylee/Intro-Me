import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import MainLandingPageContainer from "./main_landing_page/main_landing_page_container";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={MainLandingPageContainer} />
        </Switch>
    </div>
);

export default App;