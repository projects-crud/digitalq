import React, { useState } from 'react'
import { CardGroup, Card } from 'react-bootstrap'
export default function authenticate() {
    const [address, setAddress] = useState([]);

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
    return (
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
    )
}
