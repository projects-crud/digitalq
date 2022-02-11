import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Button,
  Nav,
  Container,
  Row,
  Col,
  Navbar,
  Card,
  Spinner,
} from "react-bootstrap";
import Banner from "../images/banner.svg";
import path from "../images/path.svg";

export default function UnlockWallet() {
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

      <section>
        <Container>
          <Card body className="cus-card-gradient">
            <img
              src="https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png"
              width="60px"
              height="60px"
            />
            <h4>Please Unlock Your Wallet</h4>
            <p>Also, make sure to have at least one address in your wallet.</p>
          </Card>
        </Container>
      </section>
    </div>
  );
}
