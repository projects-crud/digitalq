import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Nav, Container, Row, Col, Navbar, Carousel } from "react-bootstrap";
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
    // <div>
    //   <Navbar bg="transprant" expand="lg">
    //     <Container>
    //       <Navbar.Brand href="#home">
    //         <img src="https://digitalq.co.in/assets/images/dq-logo.svg" />
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ms-auto align-items-center">
    //           <Nav.Link href="#home">Home</Nav.Link>
    //           <Nav.Link href="#link">About</Nav.Link>
    //           <Nav.Link href="#link">Contact</Nav.Link>
    //           <Nav.Link href="#link" className="ms-4">
    //             <Button variant="secondary">SIGN IN</Button>
    //           </Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    //   <section className="hero-banner">
    //     <Container>
    //       <Row className="align-items-center">
    //         <Col md="6">
    //           <h1>Each purchase will be made with pleasure</h1>
    //           <p>
    //             We work with global brands and have created an application for
    //             you to do your shopping.
    //           </p>
    //           <Button variant="primary" className="mt-4" onClick={navigateToAuthenticate}>
    //             Create
    //           </Button>
    //         </Col>
    //         <Col md="6">
    //           <Image src={Banner} />
    //         </Col>
    //       </Row>
    //     </Container>
    //   </section>
    // </div>

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
              <Button
                variant="primary"
                className="mt-4"
                onClick={navigateToAuthenticate}
              >
                Create
              </Button>
            </Col>
            <Col md="6">
              <Image src={Banner} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* spotlight */}
      <section className="mt-5">
        <Container>
          <div className="title mb-4">
            <h3>SPOTLIGHT</h3>
            <p>Staff pick & latest updates about the marketplace</p>
          </div>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://algogems.io/img/staking.4b29d61a.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://algogems.io/img/medium_governance.68b6f301.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://algogems.io/img/rugman.12376665.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      ;{/* trending */}
      <section className="mt-5">
        <Container>
          <div className="title mb-4">
            <h3>TRENDING</h3>
            <p>Auctions</p>
          </div>

          <Row>
            <Col md="6">
              <Row>
                <Col md="6">
                  <div className="feature-collection">
                    <img src="https://images.unsplash.com/photo-1623609163859-ca93c959b98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" />
                    <div className="info">
                      <h4>$60.00</h4>
                      <p>lorem ipsum text</p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="feature-collection">
                    <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80" />
                    <div className="info">
                      <h4>$60.00</h4>
                      <p>lorem ipsum text</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <div className="feature-collection">
                    <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80" />
                    <div className="info">
                      <h4>$60.00</h4>
                      <p>lorem ipsum text</p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="feature-collection">
                    <img src="https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <div className="info">
                      <h4>$60.00</h4>
                      <p>lorem ipsum text</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <div className="feature-collection">
                <img
                  className="img-big"
                  src="https://images.unsplash.com/photo-1623609163887-ce62bb3baad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
                />
                <div className="info">
                  <h4>$60.00</h4>
                  <p>lorem ipsum text</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      ;
    </div>
  );
}
