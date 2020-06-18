
import React from "react";

import { Route, Redirect } from "react-router";

const PrivateRoute = (props) => {
    const isLogged = !!localStorage.getItem("TOKEN")
    return isLogged ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute