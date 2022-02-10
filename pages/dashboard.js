import React, {useState, useEffect} from 'react'

export default function dashboard() {
    const [assets, setAssets] = useState([])
    const [amount, setAmount] = useState(0)
    const [address, setAddress] = useState('')
    useEffect(() => {
        getAssets();
    }, [])
    const address = localStorage.getItem('digitalQAddr');
    const getAssets = () => {
        axios.get(`${GET_ASSETS}/${address}`).then((response) => {
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
    return (
        <div>
            
        </div>
    )
}
