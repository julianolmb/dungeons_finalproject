import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #300d00;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: gold;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand href="/">Dungeons and Dishes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/project">The Project</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/recipes">Recipes</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/tales">Tales</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)

/* <Styles>
    <Navbar fixed="top" expand="lg">
      <Container fluid>
      <Row>
        <Col xs={12}>
      <Navbar.Brand href="/Home">Dungeons and Dishes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Col>
      </Row>
      <Row>
        <Nav className="ml-auto">
          <Col xs={3}>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          </Col>
          <Col xs={3}>
          <Nav.Item>
            <Nav.Link>
              <Link to="/project">The Project</Link>
            </Nav.Link>
          </Nav.Item>
          </Col>
          <Col xs={3}>
          <Nav.Item>
            <Nav.Link>
              <Link to="/recipes">Recipes</Link>
            </Nav.Link>
          </Nav.Item>
          </Col>
          <Col xs={3}>
          <Nav.Item>
            <Nav.Link>
              <Link to="/tales">Tales</Link>
            </Nav.Link>
          </Nav.Item>
          </Col>
        </Nav>
        </Row>
      </Container>
    </Navbar>
  </Styles > */
