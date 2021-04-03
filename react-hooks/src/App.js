import React, { useState } from "react";

import "./App.css";
import AddMovie from "./component/AddMovie/AddMovie";
import HeaderSection from "./component/HeaderSection/HeaderSection";
// import Hero from "./component/HeroSection/Hero";
import MovieList from "./component/MovieList/MovieList";

function App() {
    const [movies, setMovies] = useState([
        {
            name: "Captain Marvel",
            rating: 5,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film1.png",
        },
        {
            name: "Captain America",
            rating: 4,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film2.png",
        },
        {
            name: "iron man",
            rating: 3,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film3.png",
        },
        {
            _id: "4",
            name: "Ant Man",
            rating: 2,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film4.png",
        },
        {
            name: "spiderman",
            rating: 1,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film5.png",
        },
        {
            name: "DEADPOOL",
            rating: 1,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film6.png",
        },
        {
            name: "black panther",
            rating: 5,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film7.png",
        },
        {
            name: "wolverine ",
            rating: 4,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film8.png",
        },
        {
            name: "hulk ",
            rating: 5,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film9.png",
        },
        {
            name: "Thor ",
            rating: 5,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film10.png",
        },
    ]);
    const getNewMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };
    return (
        <>
            <HeaderSection />
            <h1 style={{ textAlign: "center" }}>bootstrap hlekli e design</h1>
            {/* <Hero /> */}
            <AddMovie getNewMovie={getNewMovie} />
            <MovieList movies={movies} />
        </>
    );
}

export default App;
