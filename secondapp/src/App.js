import logo from "./logo.svg";
import "./App.css";

//bootstrap componenent
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
//images
import img1 from "./assets/html.png";
import img2 from "./assets/css.png";
import img3 from "./assets/js.png";

function App() {
    return (
        <>
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown
                            title="Dropdown"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Welcome To <code> React.js</code>
                    </p>
                </header>
            </div>
            <Container className="Container">
                <Row>
                    <Col sm={6} md={4}>
                        <Image src={img1} roundedCircle alt="HTML" />
                    </Col>
                    <Col>
                        <Alert variant="danger">HTML skills</Alert>

                        <ProgressBar variant="danger" animated now={90} />
                        <Button variant="outline-danger">learn more</Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={4}>
                        <Image src={img2} roundedCircle alt="CSS" />
                    </Col>
                    <Col>
                        <Alert variant="primary">CSS skills</Alert>

                        <ProgressBar variant="primary" animated now={80} />
                        <Button variant="outline-primary">learn more</Button>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} md={4}>
                        <Image src={img3} roundedCircle alt="JavaScript" />
                    </Col>
                    <Col>
                        <Alert variant="warning">JS skills</Alert>

                        <ProgressBar variant="warning" animated now={75} />

                        <Button variant="outline-warning">learn more</Button>
                    </Col>
                </Row>
            </Container>

            <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title red">Back end</h1>

                <br />

                <img src="/mongodb.png" alt="mongodb" />

                <br />

                <img src="./express.png" alt="express.js" />
            </div>
            <iframe
                title="Dev ed"
                width="727"
                height="409"
                src="https://www.youtube.com/embed/qL1YjIRDQEI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <footer style={{ display: "flex" }}>first react aplication</footer>
        </>
    );
}

export default App;
