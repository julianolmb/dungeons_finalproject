import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Ration from '../assets/mackarel.jpg';
import styled from 'styled-components';

const Styles = styled.div`

.intro {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
}

.justifiedtext {
    text-align: justify;
    padding-top: 5px;
}

.title {
    text-align: center;
    margin-bottom: 0px;
    margin-top: 0px;
}
`;

export const LatestRecipes = (props) => (

    <Styles>
        <CardGroup className="intro">
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Ration} />
                <Card.Body className="justifiedtext">
                <Card.Title className="title">
                    <h4>{props.title}</h4>
                </Card.Title>
                <Card.Text>
                <p>
                    {props.substitle}
                </p>
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </Styles>
)

// const params = QueryString.parse(document.location.search);