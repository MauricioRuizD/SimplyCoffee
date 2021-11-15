import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon } from "react-social-icons";

export default function Pie() {
  return (
    <div>
      <Row className="Pie-contacto">
        <Col></Col>
        <Col sm={1}>
          <div className="vertical"></div>
          <div></div>
        </Col>
        <Col>
          <p>CONTACTO:</p>
          <p className="Pie-datos">
            Oficina principal: Carrera 123 # 45 - 67 Bogotá
            <br />
            Tel:(+57) 3106185163
            <br />
            info@simplycoffe.com
          </p>
        </Col>
        <Col>
          <p className="Social">
            <SocialIcon
              network="facebook"
              bgColor="#6a392a"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              network="instagram"
              bgColor="#6a392a"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              network="whatsapp"
              bgColor="#6a392a"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              network="linkedin"
              bgColor="#6a392a"
              style={{ height: 30, width: 30 }}
            />
          </p>
        </Col>
      </Row>
      <Row className="Pie-cr">
        <Col>
          <strong>
            © Simply Coffee / una marca de Apollo XVIII inc —{" "}
            {new Date().getFullYear()}
            <br></br>© Todos los derechos reservados{" "}
          </strong>
        </Col>
      </Row>
    </div>
  );
}
