import React from "react";

import "./App.css";

import Trailer from "./component/Trailer/Trailer";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    // const getNewMovie = (newMovie) => {
    //     setMovies([...movies, newMovie]);
    // };
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/:id" component={Trailer} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
