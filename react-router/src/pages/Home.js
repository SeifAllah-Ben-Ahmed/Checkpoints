import React from "react";
import HeaderSection from "../component/HeaderSection/HeaderSection";
import Hero from "../component/HeroSection/Hero";
import MovieList from "../component/MovieList/MovieList";

const Home = () => {
    const movies = [
        {
            id: 1,
            name: "Captain Marvel",
            rating: 5,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film1.png",
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),
        },
        {
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),
            id: 2,
            name: "Captain America",
            rating: 4,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film2.png",
        },
        {
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),

            id: 3,
            name: "iron man",
            rating: 3,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film3.png",
        },
        {
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),
            id: 4,
            name: "Ant Man",
            rating: 2,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film4.png",
        },
        {
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),
            id: 5,
            name: "spiderman",
            rating: 1,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film5.png",
        },
        {
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),
            id: 6,
            name: "DEADPOOL",
            rating: 1,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film6.png",
        },
        {
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),
            id: 7,
            name: "black panther",
            rating: 5,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film7.png",
        },
        {
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),
            id: 8,
            name: "wolverine ",
            rating: 4,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film8.png",
        },
        {
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),
            id: 9,
            name: "hulk ",
            rating: 5,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film9.png",
        },
        {
            trailer: (
                <iframe
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/0LHxvxdRnYc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ),
            id: 10,
            name: "Thor ",
            rating: 5,
            info:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rem! ",
            src: "./img/film10.png",
        },
    ];
    return (
        <div>
            <HeaderSection />

            <Hero />

            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
