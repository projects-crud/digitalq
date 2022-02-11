import React, { useState } from 'react'
import { CardGroup, Card, Navbar, Container, Nav, Button, Row } from 'react-bootstrap'
import { useRouter } from "next/router";
import AuthenticateCode from '../components/AuthenticateAssetId';
import UnlockWallet from '../components/UnlockWallet';

export default function authenticate() {
    const [address, setAddress] = useState([]);
    const [unLock,setUnLock] = useState(false)
    const history = useRouter();

    const connectWallet = (address) => {
        setUnLock(true)
        let _AlgoSigner = AlgoSigner || null
        if (_AlgoSigner) {
            _AlgoSigner
                .connect()
                .then((d) => {
                    
                    getAccount()
                })
                .catch((e) => {
                    console.error(e)
                })
        }
    }

    const getAccount = () => {
        let _AlgoSigner = AlgoSigner ? AlgoSigner : null
        _AlgoSigner
            .accounts({
                ledger: 'TestNet',
            })
            .then((d) => {
                console.log('d', d);
                setUnLock(false)
                setAddress(d)
            })
            .catch((e) => {
                console.error('error...', e)
            })
    }

    return (
        // <React.Fragment>
        //     {
        //         address && address.length  > 0 &&  address.map(addr => {
        //             return (
        //                 <Card onClick={() => navigateToDahboard(addr.address)}>
        //                     <Card.Body>
        //                         {addr.address}
        //                     </Card.Body>
        //                 </Card>
        //             )
        //         })          
        //     }
        //     {
        //         address && address.length === 0 &&
        //         <CardGroup className="d-flex">
        //             <Card>
        //                 <Card.Body>
        //                     <Card.Img variant="top" src="https://algogems.io/img/myalgo.6079b807.png" />
        //                 </Card.Body>
        //             </Card>
        //             <Card>
        //                 <Card.Body onClick={connectWallet}>
        //                     <Card.Img variant="top" src="https://algogems.io/img/algosigner.2b02c885.png" />
        //                 </Card.Body>
        //             </Card>
        //             <Card>
        //                 <Card.Body>
        //                     <Card.Img variant="top" src="https://algogems.io/img/algowallet.0ed6463a.svg" />
        //                 </Card.Body>
        //             </Card>
        //         </CardGroup>

        //     }
        <>
        {unLock && <UnlockWallet />}
             {
                    address && address.length  > 0 && 
                      
                            <AuthenticateCode  address={address}/>
                        
                                             
                                }
                                {address && address.length === 0 && !unLock &&

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
          <h4 className="text-center mb-4 mt-5">Please select a wallet</h4>
          <Row>
            <ul className="select-box">
              <li>
                <img src="https://algogems.io/img/myalgo.6079b807.png" />
              </li>
              <li onClick={connectWallet}>
                <img src="https://algogems.io/img/algosigner.2b02c885.png" />
              </li>
              <li>
                <img src="https://algogems.io/img/algowallet.0ed6463a.svg" />
              </li>
            </ul>
          </Row>
        </Container>
      </section>
    </div>
}
</>
         )
}
