import {
  Navbar,
  Nav,
  Button,
  Offcanvas,
  Container,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { Menu } from 'lucide-react';
import { Link } from "react-scroll";

export default function Header() {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex">
        <Navbar.Brand href="#home">Linn Kristine</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link className="text-white link-hover">
           <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={250}
            >
              About Me
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white link-hover" href="#projects">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={250}
            >
              My Projects
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white link-hover" href="#more">
            More
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
