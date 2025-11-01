import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* 🖥️ Desktop Navbar */}
      <Navbar bg="dark" data-bs-theme="dark" className="d-none d-lg-flex">
        <Container className="d-flex">
          <Navbar.Brand href="#home">Linn Kristine</Navbar.Brand>
          <Nav className="justify-content-end">
            <Link
              className="text-white link-hover nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={250}
            >
              About Me
            </Link>

            <Link
              className="text-white link-hover nav-link"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={250}
            >
              My Projects
            </Link>

            <Nav.Link className="text-white link-hover" href="#more">
              More
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="dark" data-bs-theme="dark" className="d-flex d-lg-none">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home">Linn Kristine</Navbar.Brand>

          <Button variant="light" onClick={handleShow}>
            <Menu size={24} />
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}  placement="end">
        <Offcanvas.Header className="bg-black">
          <Button variant="light" onClick={handleClose}>
            <X size={24} />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Link
              className="text-white nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={250}
              data-bs-dismiss="offcanvas"
            >
              About Me
            </Link>

            <Link
              className="text-white nav-link"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={250}
              data-bs-dismiss="offcanvas"
            >
              My Projects
            </Link>

            <Nav.Link
              className="text-white"
              href="#more"
              data-bs-dismiss="offcanvas"
            >
              More
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
