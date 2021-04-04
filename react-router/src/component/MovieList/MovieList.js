import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const MovieList = ({ movies }) => {
    const [search, setsearch] = useState("");
    const [rating, setRating] = useState("");

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    return (
        <>
            <div className="mid">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={35}
                    activeColor="#d41e31"
                />

                <div className="search">
                    <input
                        name="name"
                        type="text"
                        autoComplete="off"
                        required
                        onChange={(e) => setsearch(e.target.value)}
                    />
                    <label htmlFor="name" className="labelName">
                        <span className="contentName">
                            Search By Name Or Rating...
                        </span>
                    </label>
                </div>
            </div>
            <div className="container">
                {movies
                    .filter(
                        (e) =>
                            e.rating >= rating &&
                            e.name.toUpperCase().includes(search.toUpperCase())
                    )
                    .map((film, index) => (
                        <MovieCard
                            // rate="5"
                            id={film.id}
                            key={index}
                            src={film.src}
                            name={film.name}
                            info={film.info}
                            rating={film.rating}
                        />
                    ))}
            </div>
        </>
    );
};

export default MovieList;
