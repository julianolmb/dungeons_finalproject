import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import tavernImage from '../assets/tavernImage.jpg';

const Styles = styled.div`
  
  .jumbo {
    background: url(${tavernImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -2;
    display: flex;
    text-align: center;
    align-items: center;
    margin-bottom: 0;
  }

  /* .overlay {
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  } */
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        {/* <h1>Welcome to our virtual tavern!</h1>
        <p>Discover fantastic recipes and tales.</p> */}
      </Container>
    </Jumbo>
  </Styles>
)
