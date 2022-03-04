import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

.footer {
    background-color: #300d00;
    margin-top: 10px;
    text-align: center;
    color: white;
    padding: 10px;
}

.test {
  height: 30px;
  align-items: center;
  display: flex;
}
`;

export const Footer = (props) => (
  
  <Styles>
    <Container fluid className="footer">
      <Row className="test">
        <Col xs={4}>
          Facebook
        </Col>
        <Col xs={4}>
          Instagram
        </Col>
        <Col xs={4}>
          Github
        </Col>
      </Row>
      <Row className="test">
        <Col xs={4}>
        Contact
        </Col>
        <Col xs={4}>
        Terms of Use
        </Col>
        <Col xs={4}>
        Privacy Policy
        </Col>
      </Row>
      <Row >
        <Col xs={12}>
        Copyright © 2021 dungeons and dishes by Juliano Lombardi, all rights reserved.
        </Col>
      </Row>
    </Container>
  </Styles>
)
