import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Tavern from '../assets/tavernKeeper.jpg';
import styled from 'styled-components';

const Styles = styled.div`

.intro {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
}

.justifiedtext {
    text-align: justify;
}

.avatar {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
}

`;

export const Intro = (props) => (
  
   <Styles>
        <Container fluid className="intro">
            <Row>
                <Col xs={12} md={2} className="avatar">
                <Image src={Tavern} roundedCircle height="100" alt="avatar"/>
                </Col>
                <Col xs={12} md={10} className="justifiedtext">
                <p>Hello traveler, my name is Juliano I created this website and with the help of my friends and my family for you to enjoy.
                Dungeons and Dishes is a fun project that connects RPG stories, fantasy culture and good food. 
                All through dishes inspired by fictional charaters and worlds from famous games, and also friends and community, ocassionally throwing a bit of culinary history in the middle. 
                For every dish we make we try to tell a different tale and talk a little bit about how the dish was interpreted and created by Jolly Panflip - Our kind fictional tavern keeper.
                </p>
                </Col>
            </Row>
        </Container>
    </Styles>  

)