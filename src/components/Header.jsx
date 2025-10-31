import {
  Navbar,
  Nav,
  Button,
  Offcanvas,
  Container,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { Menu } from 'lucide-react';

export default function Header() {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-none d-md-flex">
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
          <Menu />
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Button
            variant="light"
            onClick={handleClose}
            size="sm"
            className=" me-auto p-2"
          >
            <Menu />
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
  );
}
