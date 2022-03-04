import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

.textblock {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #531a10;
    color: white;
}

.textblockp {
  margin: 0px;
  padding: 10px;
}
`;

export const TextBlock = (props) => (
  <Styles>
    <Container fluid className="textblock">
      <Row >
        <Col xs={12}>
          <p className="textblockp">{props.textblock}</p>
        </Col>
      </Row>
    </Container>
  </Styles>
)
