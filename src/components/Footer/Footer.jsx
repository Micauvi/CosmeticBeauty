import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <h3>Nosotros</h3>
              
            </Col>
            <Col md={4}>
              <h3>Contacto</h3>
             
            </Col>
            <Col md={4}>
              <h3>Ayuda</h3>
              
            </Col>
          </Row>
          <hr />
          <Row className="">
            <Col md={6}>
              <p>&copy; 2023 Ejemplo Inc. Todos los derechos reservados.</p>
            </Col>
            <Col md={6} className="text-right">
              <p>
                Desarrollado por Micaela Uvilla.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
