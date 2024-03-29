import React, { Fragment } from "react";
import "./MovieCard.css";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const MovieCard = ({ info, src, name, rating }) => {
    return (
        <>
            <div className="card">
                <div className="info">
                    <h2>{name}</h2>
                    <div>
                        <span>
                            {rating >= 1 ? (
                                <BsStarFill />
                            ) : rating >= 0.5 ? (
                                <BsStarHalf />
                            ) : (
                                <BsStar />
                            )}
                        </span>
                        <span>
                            {rating >= 2 ? (
                                <BsStarFill />
                            ) : rating >= 1.5 ? (
                                <BsStarHalf />
                            ) : (
                                <BsStar />
                            )}
                        </span>
                        <span>
                            {rating >= 3 ? (
                                <BsStarFill />
                            ) : rating >= 2.5 ? (
                                <BsStarHalf />
                            ) : (
                                <BsStar />
                            )}
                        </span>
                        <span>
                            {rating >= 4 ? (
                                <BsStarFill />
                            ) : rating >= 3.5 ? (
                                <BsStarHalf />
                            ) : (
                                <BsStar />
                            )}
                        </span>
                        <span>
                            {rating >= 5 ? (
                                <BsStarFill />
                            ) : rating >= 4.5 ? (
                                <BsStarHalf />
                            ) : (
                                <BsStar />
                            )}
                        </span>
                    </div>
                    <p>{info}</p>
                    <a href="https://www.google.com/">Read More</a>
                </div>
                <img src={src} alt="movie" />
            </div>
        </>
    );
};

export default MovieCard;
