import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TaleMackarel from '../assets/taleMackarel.jpg';
import styled from 'styled-components';
// import {useState, useEffect} from 'react';
// import { ApiClient } from '../apiClient';

const Styles = styled.div`

.intro {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
}

.justifiedtext {
    text-align: justify;
}

.talepic {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
}

.title {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
}

`;

export default function LatestTale(props) {


    return (

    <Styles>
        <Container fluid className="intro">
            <Row>
                <Col xs={12} md={3} className="talepic">
                <Image src={TaleMackarel} rounded height="230" alt="avatar"/>
                </Col>
                <Col xs={12} md={9} className="justifiedtext">
                <h6 className="title">{props.taletitle}</h6>
                <p className="">{props.talecontent}</p>
                </Col>
            </Row>
        </Container>
    </Styles>

    )

}

