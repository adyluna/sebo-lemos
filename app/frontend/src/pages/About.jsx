import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import logo from '../images/seboLogo.jpeg';

class About extends React.Component {
  render() {
    return (
      <Container>
        <Row className='align-itens-center justify-content-center'>
          <Col lg={6} className="mt-3 p-2">
            <Image roundedCircle fluid src={logo} alt='sebo-logo'/>
          </Col>
          <Col lg={6} className="p-3 mt-3">
            <p style={{ fontSize: '2vw' }} className='font-monospace'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Consequat ac felis donec et. Nulla aliquet enim tortor at. Lacus sed viverra tellus in. Urna nunc 
              id cursus metus aliquam eleifend. Felis imperdiet proin fermentum leo. Tincidunt nunc pulvinar sapien et ligula
              ullamcorper malesuada proin. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Mattis vulputate
              enim nulla aliquet porttitor lacus luctus accumsan. Tincidunt eget nullam non nisi est sit. Lobortis elementum
              nibh tellus molestie nunc non blandit. Magna ac placerat vestibulum lectus. Cras ornare arcu dui vivamus arcu
              felis bibendum ut. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Lacus vel facilisis volutpat est
              velit.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;