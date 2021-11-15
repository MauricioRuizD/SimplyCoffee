import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import a from "./img/a.jpg";
import b from "./img/b.jpg";
import c from "./img/c.jpg";
import d from "./img/d.jpg";
import e from "./img/e.jpg";
import f from "./img/f.jpg";

export default function Home() {
  return (
    <Container>
      <div>
        <Carousel className="container">
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={a} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={b} alt="second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={c} alt="third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={d} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={e} alt="Fifth slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={f} alt="Sixth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <Container className="Carrusel">
        <div>
          "Conozca del Café Colombiano, reconocido internacionalmente como el
          mejor café suave del mundo. <br />
          Colombia con su geografía, le permite tener diferentes tipos de café .
          Tómese una buena taza y disfrútelo en comidas o postres.
        </div>
        <div className="Carrusel-frase">
          ¡Viva la experiencia del Café de Colombia!"
        </div>
      </Container>
    </Container>
  );
}
