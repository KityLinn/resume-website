import { Container, Row, Col, Image } from 'react-bootstrap';
import { Mail, MapPin } from 'lucide-react';
import Me from "../assets/profil bilde.jpg";

export default function AboutSection() {
  return (
    <section className="py-5 bg-light" id="about">
      <Container>
        <h2 className="text-center mb-5 fw-bold display-5">About Me</h2>
        <Row className="align-items-center g-1">
          <Col md={6} className="text-center">
            <Image
              src={Me}
              className="shadow-lg border border-4 border-primary image-style"
              alt="Profile"
            />
          </Col>
          <Col md={6}>
            <h3 className="mb-3 fw-bold">Linn Kristine Vikse</h3>
            <p className="lead text-muted mb-3">Front-end Developer</p>
            <p className="mb-4 lh-lg">
              I’m a newly educated frontend developer with a passion for
              creating user-friendly and visually elegant websites. I
              enjoy bringing designs to life using tools like React, JavaScript,
              Bootstrap, and SASS, focusing on responsive layouts and clean,
              maintainable code. I’m excited to continue learning, building, and
              crafting digital experiences that make the web more intuitive and
              enjoyable for everyone.
            </p>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-3">
                <Mail size={22} className="text-primary" />
                <span className="fs-6">linn.vik.dev@gmail.com</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <MapPin size={22} className="text-primary" />
                <span className="fs-6">Bergen, Norway</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
