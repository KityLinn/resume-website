import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 mt-5 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">© 2024 Linn Kristine. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end d-flex gap-3 justify-content-md-end">
            <a href="#" className="text-white text-decoration-none link-light">
              <Github size={24} />
            </a>
            <a href="#" className="text-white text-decoration-none link-light">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white text-decoration-none link-light">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white text-decoration-none link-light">
              <Mail size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
