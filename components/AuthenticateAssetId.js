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
} from "react-bootstrap";
import Banner from "../images/banner.svg";
import path from "../images/path.svg";
import { useRouter } from "next/router";
import algosdk from "algosdk";

export default function AuthenticateCode({ address }) {
  console.log("address", address);
  const history = useRouter();
  const navigateToDahboard = (address) => {
    localStorage.setItem("digitalQAddr", address);
    history.push("/dashboard");
  };

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
          <h4 className="text-center mb-4 mt-5">
            Select the address to use to authenticate
          </h4>
          <Row>
            <Col>
              {address &&
                address.length > 0 &&
                address.map((addr) => (
                  <Card body className="cus-card">
                    <h5
                      className="assetId"
                      onClick={() => navigateToDahboard(addr.address)}
                    >
                      {addr.address}
                    </h5>
                  </Card>
                ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
