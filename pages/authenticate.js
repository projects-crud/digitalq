import React, { useState } from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import { useRouter } from "next/router";

export default function authenticate() {
    const [address, setAddress] = useState([]);
    const history = useRouter();

    const connectWallet = (address) => {
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
                setAddress(d)
            })
            .catch((e) => {
                console.error('error...', e)
            })
    }

    const navigateToDahboard = (address) => {
        localStorage.setItem('digitalQAddr', address);
        history.push('/dashboard');
    }
    return (
        <React.Fragment>
            {
                address && address.length  > 0 &&  address.map(addr => {
                    return (
                        <Card onClick={() => navigateToDahboard(addr.address)}>
                            <Card.Body>
                                {addr.address}
                            </Card.Body>
                        </Card>
                    )
                })          
            }
            {
                address && address.length === 0 &&
                <CardGroup className="d-flex">
                    <Card>
                        <Card.Body>
                            <Card.Img variant="top" src="https://algogems.io/img/myalgo.6079b807.png" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body onClick={connectWallet}>
                            <Card.Img variant="top" src="https://algogems.io/img/algosigner.2b02c885.png" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Img variant="top" src="https://algogems.io/img/algowallet.0ed6463a.svg" />
                        </Card.Body>
                    </Card>
                </CardGroup>

            }
            </React.Fragment>
         )
}
