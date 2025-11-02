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
      <Navbar className="d-none d-lg-flex blue-background">
        <Container className="justify-content-end">
          <Nav>
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

            <Link
              className="text-white link-hover nav-link"
              to="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={250}
            >
              Contact Me
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar className="d-flex d-lg-none bg-primary">
        <Container className="justify-content-end">
          <Button variant="light" onClick={handleShow} aria-label="open menu">
            <Menu size={24} />
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end" restoreFocus={false}>
        <Offcanvas.Header className="bg-primary">
          <Button variant="light" onClick={handleClose} aria-label="close menu">
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
              onClick={handleClose} 
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
              onClick={handleClose}
            >
              My Projects
            </Link>
            <Link
              className="text-white link-hover nav-link"
              to="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={250}
              data-bs-dismiss="offcanvas"
              onClick={handleClose} 
            >
              Contact Me
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
