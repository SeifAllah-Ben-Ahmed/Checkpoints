import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddMovie.css";

const AddMovie = ({ getNewMovie }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMovie, setNewMovie] = useState({});

    const handleSubmit = () => {
        getNewMovie(newMovie);
        handleClose();
    };
    return (
        <>
            <div className="mid">
                <Button variant="danger" onClick={handleShow}>
                    Add Movie
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Movie...</Modal.Title>
                </Modal.Header>
                <Modal.Body className="inputArea">
                    <Form.Control
                        type="text"
                        placeholder="Enter Title..."
                        onChange={(e) =>
                            setNewMovie({ ...newMovie, name: e.target.value })
                        }
                    />
                    <Form.Control
                        type="text"
                        placeholder="Enter Description..."
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                info: e.target.value,
                            })
                        }
                    />
                    <Form.Control
                        type="text"
                        placeholder="Enter PosterUrl..."
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                src: e.target.value,
                            })
                        }
                    />
                    <Form.Control
                        type="number"
                        max="5"
                        placeholder="Enter Rate..."
                        onChange={(e) =>
                            setNewMovie({ ...newMovie, rating: e.target.value })
                        }
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSubmit}>
                        Add Movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddMovie;
