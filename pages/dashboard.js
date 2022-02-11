import React, { useState, useEffect } from "react";
import axios from "axios";
import algosdk from "algosdk";
import {
  Button,
  Nav,
  Container,
  Row,
  Col,
  Navbar,
  Card,
  Offcanvas,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { useFormik } from "formik";
export default function dashboard() {
  const [assets, setAssets] = useState([]);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [createdAssets, setCreatedAssets] = useState([]);
  const [txParamsJS, setTxParamsJS] = useState();
  const [assetId,setAssetId] = useState("")
  const [fileName, setFileName] = useState("");
  const [formState, setFormState] = useState(true);

  useEffect(() => {
    const addressId = window.localStorage.getItem("digitalQAddr");
    setAssetId(addressId)
    getAssets();

  }, [assetId]);
  const getAssets = () => {
    const addressId = window.localStorage.getItem("digitalQAddr");
    axios
      .get(`https://api.testnet.algoexplorer.io/v2/accounts/${addressId}`)
      .then((response) => {
        const { assets, amount, address } = response.data;
        setupSDK();
        setAssets(assets);
        setAddress(address);
        setAmount(amount);
        setCreatedAssets(response.data["created-assets"]);
      });
  };

  const setupSDK = () => {
    const server = "https://testnet-algorand.api.purestake.io/ps2";
    const token = { "X-API-Key": "B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab" };
    const port = "";

    const algodClient = new algosdk.Algodv2(token, server, port);

    algodClient
      .healthCheck()
      .do()
      .then((d) => {
        getParams();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getParams = () => {
    const server = "https://testnet-algorand.api.purestake.io/ps2";
    const token = { "X-API-Key": "B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab" };
    const port = "";
    const algodClient = new algosdk.Algodv2(token, server, port);
    algodClient
      .getTransactionParams()
      .do()
      .then((d) => {
        setTxParamsJS(d);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const createAsset = () => {};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getFileName =(e)=>{
    setFileName(e.target.files[0])
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      supply: "",
      unitPrice: "",
    },
    onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
    console.log(values);
    //   pinToFIle()
    }
  });

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
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h5 className="mb-4 mt-5">Your authenticate address</h5>
              <Card body className="cus-card">
                <h5>
                  {assetId}
                </h5>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className="title-btn-sec">
                <h5 className="mb-4 mt-5">Your assets list</h5>
                <Button variant="primary" onClick={handleShow}>
                  Create Assets
                </Button>
              </div>
              <Card body className="cus-card mb-4">
                <div className="assets-box">
                  <div className="profile">
                    <img src="https://media.istockphoto.com/photos/lots-of-multicoloured-cubes-moving-in-space-to-come-together-to-form-picture-id1312818032?b=1&k=20&m=1312818032&s=170667a&w=0&h=1ATbE11tJ8wchBqnCrZVrd0bxnERiT1DtMVS2VufR1I=" />
                  </div>
                  <div className="right">
                    <div>
                      <h4>Lorem Ipsum has been the industry's</h4>
                      <div className="info-box">
                        <div className="info">
                          <p>23</p>
                          <span>Total</span>
                        </div>
                        <div className="info">
                          <p>Field name value</p>
                          <span>Field name</span>
                        </div>
                        <div className="info">
                          <p>Field name value</p>
                          <span>Field name</span>
                        </div>
                      </div>
                      <div className="info mt-3">
                        <span>Description</span>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          ...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="action-sec">
                    <Button variant="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                      </svg>
                    </Button>
                    <Button variant="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card body className="cus-card mb-4">
                <div className="assets-box">
                  <div className="profile">
                    <img src="https://media.istockphoto.com/photos/lots-of-multicoloured-cubes-moving-in-space-to-come-together-to-form-picture-id1312818032?b=1&k=20&m=1312818032&s=170667a&w=0&h=1ATbE11tJ8wchBqnCrZVrd0bxnERiT1DtMVS2VufR1I=" />
                  </div>
                  <div className="right">
                    <div>
                      <h4>Lorem Ipsum has been the industry's</h4>
                      <div className="info-box">
                        <div className="info">
                          <p>23</p>
                          <span>Total</span>
                        </div>
                        <div className="info">
                          <p>Field name value</p>
                          <span>Field name</span>
                        </div>
                        <div className="info">
                          <p>Field name value</p>
                          <span>Field name</span>
                        </div>
                      </div>
                      <div className="info mt-3">
                        <span>Description</span>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          ...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="action-sec">
                    <Button variant="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                      </svg>
                    </Button>
                    <Button variant="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* 
      <button onClick={createAsset}>Create</button> */}

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create Assets</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div class="box js mb-4">
            <img
              className="placeholder-img"
              src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            />

            <input
              type="file"
              name="file-1[]"
              id="file-1"
              class="inputfile inputfile-1"
              data-multiple-caption="{count} files selected"
              multiple=""
              onChange={getFileName}
            />
            <label htmlFor="file-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="17"
                viewBox="0 0 20 17"
              >
                <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
              </svg>{" "}
              <span>Choose a file…</span>
            </label>
          </div>
          <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="name">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
          </FloatingLabel>
            </Form.Group>
        <Form.Group controlId="description">
          <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="mb-3"
          >
            <Form.Control type="text" name="description" placeholder="Enter descrpition" onChange={formik.handleChange} value={formik.values.description}/>
          </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="supply">
          <FloatingLabel
            controlId="floatingInput"
            label="Supply"
            className="mb-3"
          >
            <Form.Control type="text"  name="supply" placeholder="Enter supply" onChange={formik.handleChange} value={formik.values.supply} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="unitPrice">
          <FloatingLabel
            controlId="floatingInput"
            label="Unit Price"
            className="mb-3"
          >
            <Form.Control type="text" name="unitPrice" placeholder="Enter nnit price" onChange={formik.handleChange} value={formik.values.unitPrice}/>
          </FloatingLabel>
        </Form.Group>
          <Button className="m-auto d-block" variant="primary" onClick={values => setFormState(values)}>
            Submit
          </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
