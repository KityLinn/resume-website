import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 mt-5 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">© 2024 Linn Kristine. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end d-flex gap-3 justify-content-md-end">
            <a href="https://github.com/KityLinn" className="text-white text-decoration-none link-light">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/linn-kristine-vikse-a909a6338/" className="text-white text-decoration-none link-light">
              <Linkedin size={24} />
            </a>
            <a href="linn.vik.dev@gmail.com" className="text-white text-decoration-none link-light">
              <Mail size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
