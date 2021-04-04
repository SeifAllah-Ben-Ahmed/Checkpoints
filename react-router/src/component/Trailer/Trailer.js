import React from "react";
import { useParams, Link } from "react-router-dom";
import HeaderSection from "../HeaderSection/HeaderSection";

const Trailer = () => {
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
                    width="617"
                    height="257"
                    src="https://www.youtube.com/embed/7SlILk2WMTI"
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
                    src="https://www.youtube.com/embed/8ugaeA-nMTc"
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
                    width="617"
                    height="333"
                    src="https://www.youtube.com/embed/pWdKf3MneyI"
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
                    width="617"
                    height="333"
                    src="https://www.youtube.com/embed/TYMMOjBUPMM"
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
                    src="https://www.youtube.com/embed/gtTfd6tISfw"
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
                    src="https://www.youtube.com/embed/dxWvtMOGAhw"
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
                    width="617"
                    height="262"
                    src="https://www.youtube.com/embed/toLpchTUYk8"
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
                    width="617"
                    height="262"
                    src="https://www.youtube.com/embed/xbqNb2PFKKA"
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
                    src="https://www.youtube.com/embed/npvJ9FTgZbM"
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
    const filmid = useParams();
    const film = movies.find((e) => e.id === Number(filmid.id));

    // const movie = movies[0].Trailer;
    return (
        <div style={{ textAlign: "center" }}>
            <HeaderSection />
            <h1 style={{ color: "white", fontSize: "100px" }}>{film.name}</h1>
            <div>{film.trailer}</div>
            <p style={{ color: "white", fontSize: "30px" }}>{film.info}</p>
            <Link to="/">
                <button
                    style={{
                        color: "white",
                        fontSize: "50px",
                        backgroundColor: "red",
                        borderRadius: "10px",
                    }}
                >
                    go home
                </button>
            </Link>
        </div>
    );
};

export default Trailer;
