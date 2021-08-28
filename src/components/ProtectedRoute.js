import React from "react";
import {Route, Redirect} from "react-router-dom";

export const ProtectedRoute = ({isLoggedIn, component: Component, ...restProps}) => {

    if (!isLoggedIn) {
        return <Redirect to="/sign-in"/>
    }
    return <Route>
        <Component {...restProps} />
    </Route>
}