import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useState, useEffect} from 'react'
import { ApiClient } from '../apiClient';

const Styles = styled.div`

.quotecontainer {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    max-width: 500px;
    background-color: beige;
}

.justifiedtext {
    margin-top: 10px;
    text-align: justify;
}

.author {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
}

`;



export default function Quotes(props) {

  const [quotes,changeQuotes] = useState([]);
  const [ra,changeRa] = useState(0);
  
  useEffect( async () => {
    const api = new ApiClient();
    let values = await api.getQuotes();
    changeQuotes(values.data);
  
    /*Math.random() * (max - min) + min*/
    //console.log(Math.random() * (values.data.length -1));
    changeRa(Math.floor(Math.random() * (values.data.length -1)));
  },[] )

  return (
    
  <Styles>
    <Container fluid className="quotecontainer">
      <Row >
        <Col xs={12} className="justifiedtext">
          <p>{quotes.length > 0 ? quotes[ra].quote : ''}</p>
        </Col>
        <Col xs={12} className="author">
          <h6>{quotes.length > 0 ? quotes[ra].author : ''}.</h6>
        </Col>
      </Row>
    </Container>
  </Styles>

  )
}
