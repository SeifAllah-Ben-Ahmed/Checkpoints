import React, { Fragment } from "react";
import "./MovieCard.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
const MovieCard = ({ info, src, id, name, rating }) => {
    return (
        <>
            <div className="card">
                <img src={src} alt="movie" />
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
                    <Link
                        style={{
                            position: "relative",
                            display: "inlineBlock",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            color: " #111",
                            backgroundColor: "white",
                            textDecoration: "none",
                            margin: "10px 0px",
                            cursor: "pointer",
                            zIndex: "1000",
                        }}
                        to={`/${id}`}
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
