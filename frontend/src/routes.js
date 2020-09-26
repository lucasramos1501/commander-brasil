import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createContext } from "react";

import Index from "./pages/Index";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import User from "./pages/User";
import Upload from "./pages/Upload";
import Collection from "./pages/Collection";
import CardList from "./pages/CardList";
import NotFound from "./pages/NotFound";

import PrivateRoute from "./components/PrivateRoutes"


const userContext = createContext({});

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/createaccount" component={CreateAccount} />
                <PrivateRoute path="/home" component={Index} />
                <PrivateRoute path="/user" component={User} />
                <PrivateRoute path="/exit" component={Login} />
                <PrivateRoute path="/upload" component={Upload} />
                <PrivateRoute path="/cardlists" component={CardList} />
                <PrivateRoute path="/collections" component={Collection} />
                <Route path="/" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}