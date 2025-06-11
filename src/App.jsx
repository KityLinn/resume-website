import { Navbar, Nav, Button, Offcanvas, Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import image from "./assets/profil bilde.jpg"

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container className=" d-none d-md-flex">
            <Navbar.Brand href="#home">Linn Kristine</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link className="text-white link-hover" href="#about">
                About me
              </Nav.Link>
              <Nav.Link className="text-white link-hover" href="#projects">
                My projects
              </Nav.Link>
              <Nav.Link className="text-white link-hover" href="#more">
                More
              </Nav.Link>
            </Nav>
          </Container>
          <Container className="d-md-none d-flex">
          <Navbar.Brand href="#home">Linn Kristine</Navbar.Brand>
            <Button
              variant="light"
              onClick={handleShow}
              size="sm"
              className="justify-content-end"
            >
              Test
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
            <Button
              variant="light"
              onClick={handleClose}
              size="sm"
              className=" me-auto p-2"
            >
              Test
            </Button>
              <Offcanvas.Body>
              <Nav className="justify-content-end" bg="dark">
              <Nav.Link className="text-white" href="#about">
                About me
              </Nav.Link>
              <Nav.Link className="text-white" href="#projects">
                My projects
              </Nav.Link>
              <Nav.Link className="text-white" href="#more">
                More
              </Nav.Link>
            </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </header>
      <main>
        <section id="about">
          <Container>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
        </section>
        <section>Text</section>
        <section>Text</section>
      </main>
       <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a to="#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a to="#" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a to="#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a to="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a to="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2024 Kitty-co</p>
      </footer>
    </>
  );
}

export default App
