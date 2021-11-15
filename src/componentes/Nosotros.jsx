import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Moni from "./img/moni.jpg";
import Mauricio from "./img/mauricio.jpg";
import Edgar from "./img/edgar.png";
import Joe from "./img/jose.jpg";
import Rafa from "./img/rafa.jpg";

export default function Nosotros() {
  return (
    <div className="Nos">
      <Container className="Nosotros">
        <Row>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={Moni} />
              <Card.Body>
                <Card.Title>Monica A. Angulo P.</Card.Title>
                <Card.Text>
                  Ingeniera de Sistemas del Politécnico Grancolombiano,
                  <br />
                  con experiencia en desarrollo de software, Gerencia de
                  proyectos y conocimiento y aplicación de metodologías, modelos
                  y normas de calidad enfocadas en el área TI. (SCRUM, CMMI,
                  ITMARK, ITIL, ISO27000, ISO20000).
                  <p className="Nosotros-frase">
                    "Amigos y café, la mejor combinación"
                  </p>
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={Mauricio} />
              <Card.Body>
                <Card.Title>Mauricio H. Ruiz Diaz.</Card.Title>
                <Card.Text>
                  Ingeniero Electrónico - Universidad Santo Tomas <br />{" "}
                  Experiencia en desarrollo de maquinaria CNC, Impresoras 3D,
                  músico aficionado <br />
                  <br />
                  <br />
                  <p className="Nosotros-frase">
                    "Cafe, el origen y combustible de grandes proyectos"
                  </p>
                  <br />
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={Edgar} />
              <Card.Body>
                <Card.Title>Edgar Orozco Guaraya</Card.Title>
                <Card.Text>
                  Técnico en Sistemas y Computación <br />
                  Desarrollador de software durante más de veinte años,
                  astrónomo aficionado, fotógrafo y amante de la ciencia
                  ficción. <br />
                  <br />
                  <br />
                  <p className="Nosotros-frase">
                    "En cada sorbo de café hay una buena idea escondida"
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={Joe} />
              <Card.Body>
                <Card.Title>Jose Luis Rassa Novoa</Card.Title>
                <Card.Text>
                  Comunicador Social - Periodista de la <br />
                  Universidad de la Sabana. <br />
                  Amplia experiencia en investigación de mercados, análisis de
                  datos, técnicas de recolección de información y diseño de
                  estrategias de planeación estratégica.
                  <p className="Nosotros-frase">
                    "La felicidad es un buen libro y una taza de café"
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={Rafa} />
              <Card.Body>
                <Card.Title>Rafael Fajardo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <p className="Nosotros-frase">
                    "Amigos y café, la mejor combinación"
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
