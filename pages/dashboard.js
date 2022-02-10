import React, {useState, useEffect} from 'react'
import axios from 'axios';
import algosdk from 'algosdk';

export default function dashboard() {
    const [assets, setAssets] = useState([])
    const [amount, setAmount] = useState(0)
    const [address, setAddress] = useState('')
    const [createdAssets, setCreatedAssets] = useState([])
    const [txParamsJS, setTxParamsJS] = useState()

    useEffect(() => {
        getAssets();
    }, [])
    const getAssets = () => {
        const addressId = window.localStorage.getItem('digitalQAddr');
        axios.get(`https://api.testnet.algoexplorer.io/v2/accounts/${addressId}`).then((response) => {
            const { assets, amount, address } = response.data
            setupSDK()
            setAssets(assets)
            setAddress(address)
            setAmount(amount)
            setCreatedAssets(response.data['created-assets'])
        })
    }

    const setupSDK = () => {
        const server = 'https://testnet-algorand.api.purestake.io/ps2'
        const token = { 'X-API-Key': 'B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab' }
        const port = ''

        const algodClient = new algosdk.Algodv2(token, server, port)

        algodClient
            .healthCheck()
            .do()
            .then((d) => {
                getParams()
            })
            .catch((e) => {
                console.error(e)
            })
    }

    const getParams = () => {
        const server = 'https://testnet-algorand.api.purestake.io/ps2'
        const token = { 'X-API-Key': 'B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab' }
        const port = ''
        const algodClient = new algosdk.Algodv2(token, server, port)
        algodClient
            .getTransactionParams()
            .do()
            .then((d) => {
                setTxParamsJS(d)
            })
            .catch((e) => {
                console.error(e)
            })
    }

    const createAsset = () => {
        
    }
    return (
        <div>
            <button onClick={createAsset}>Create</button>
        </div>
    )
}
