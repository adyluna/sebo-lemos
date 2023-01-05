import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class Carregando extends Component {
  render() {
    return (
      <Container>
        <Row className='align-itens-center justify-content-center text-center'>
            <p>Carregando...</p>
        </Row>
      </Container>
    );
  }
}

export default Carregando;