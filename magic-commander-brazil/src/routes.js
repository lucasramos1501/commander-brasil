import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import User from "./pages/User";
import Upload from "./pages/Upload";
import Collection from "./pages/Collection";
import CardList from "./pages/CardList";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/createaccount" component={CreateAccount} />
                <Route path="/home" component={Index} />
                <Route path="/user" component={User} />
                <Route path="/exit" component={Login} />
                <Route path="/upload" component={Upload} />
                <Route path="/cardlists" component={CardList} />
                <Route path="/collections" component={Collection} />
            </Switch>
        </BrowserRouter>
    );
}