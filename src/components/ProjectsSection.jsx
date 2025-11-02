import { Container, Row, Col, Card } from 'react-bootstrap';
import { ExternalLink, Github } from 'lucide-react';
import {data} from './data'

export default function ProjectsSection() {
  return (
    <section className="py-5 bg-white" id="projects">
      <Container>
        <h2 className="text-center mb-5 fw-bold display-5">My Projects</h2>
        <Row className="g-4">
          {data.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="shadow-sm border-1 project-card">
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                  alt={project.title}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-2 fs-5">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3 flex-grow-1 small lh-lg">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge bg-primary bg-opacity-75"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex gap-3 pt-3 border-top">
                    <a
                      href={project.githubLink}
                      className="text-decoration-none text-primary d-flex align-items-center gap-2 link-hover"
                    >
                      <Github size={18} />
                      <span className="small">Code</span>
                    </a>
                    <a
                      href={project.pageLink}
                      className="text-decoration-none text-primary d-flex align-items-center gap-2 link-hover"
                    >
                      <ExternalLink size={18} />
                      <span className="small"></span>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
