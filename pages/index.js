import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Nav, Container, Row, Col, Navbar } from "react-bootstrap";
import Banner from "../images/banner.svg";
import path from "../images/path.svg";
import { useEffect, useState } from "react";
import algosdk from "algosdk";
import { useRouter } from "next/router";
export default function Home() {
  const history = useRouter();

  const navigateToAuthenticate = () => {
    history.push('/authenticate');
  }
  return (
    <div>
      <Navbar bg="transprant" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://digitalq.co.in/assets/images/dq-logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link" className="ms-4">
                <Button variant="secondary">SIGN IN</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="hero-banner">
        <Container>
          <Row className="align-items-center">
            <Col md="6">
              <h1>Each purchase will be made with pleasure</h1>
              <p>
                We work with global brands and have created an application for
                you to do your shopping.
              </p>
              <Button variant="primary" className="mt-4" onClick={navigateToAuthenticate}>
                Create
              </Button>
            </Col>
            <Col md="6">
              <Image src={Banner} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
