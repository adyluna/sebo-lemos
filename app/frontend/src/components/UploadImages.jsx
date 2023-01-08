import React from "react";
import { Container, Form, FormGroup, FormControl } from 'react-bootstrap';
const UploadImages = () => {
  return (
    <Container>
      <h1>Selecione ou arraste as imagens</h1>
      <Form
        className="mt-4"
        action="/upload"
        method="POST"
        enctype="multipart/form-data"
      >
        <FormGroup>
          <FormControl
            placeholder="Solte aqui"
            type="file"
            name="file"
            id="input-files"
            className="border"
          />
        </FormGroup>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </Form>
    </Container>
  )
}

export default UploadImages;