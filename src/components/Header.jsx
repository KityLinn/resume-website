import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";

import { Link } from "react-scroll";

export default function Header() {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
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
  );
}
