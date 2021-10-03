import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import "./index.scss";
import {ArticleEN} from "./pages/ArticleEN";
import {ArticleNL} from "./pages/ArticleNL";

export function App() {
    return (
        <Switch>
            <Route exact path="/nl" component={ArticleNL}/>
            <Route exact path="/en" component={ArticleEN}/>
            <Redirect to="/nl"/>
        </Switch>
    );
}
