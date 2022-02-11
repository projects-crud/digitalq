import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button, Container, Row, Form } from "react-bootstrap";
import axios from 'axios';

import FormData from 'form-data';
import { createReadStream } from 'fs';

export default function CreateAsset({assets,address,createAsset,amount}) {
    const [formState, setFormState] = useState(true);
    const [fileName, setFileName] = useState("");
    // const fs = require('fs').promises
    const formik = useFormik({
        initialValues: {
          name: "",
          description: "",
          supply: "",
          unitPrice: "",
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        //   pinToFIle()
        }
      });
      console.log("filename",fileName);

    // const pinToFIle = () => {
    //     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    // //we gather a local file for this example, but any valid readStream source will work here.
    // let data = new FormData();
    // data.append('file', fs.createReadStream(fileName));
    // console.log("data...",fileName);

    // //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
    // //metadata is optional
    // const metadata = JSON.stringify({
    //     name: 'testname',
    //     keyvalues: {
    //         exampleKey: '123'
    //     }
    // });
    // data.append('pinataMetadata', metadata);
   

    // return axios
    //     .post(url, data, {
    //         maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
    //         headers: {
    //             'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    //             pinata_api_key: 'ab7f3f47d6a9f9004a2e',
    //             pinata_secret_api_key: '8b95b1587d1f8c525464b06203d2b28f6832af5525d001814c24b9774bcf1b80'
    //         }
    //     })
    //     .then(function (response) {
    //         console.log('res', response);
    //     })
    //     .catch(function (error) {
    //         //handle error here
    //         console.error("error",error);
    //     });
    // }
   

     const pinFileToIPFS = (pinataApiKey, pinataSecretApiKey) => {
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    
        //we gather a local file for this example, but any valid readStream source will work here.
        let data = new FormData();
        data.append('file', createReadStream);
    
        return axios.post(url,
            data,
            {
                maxContentLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    'pinata_api_key': 'ab7f3f47d6a9f9004a2e',
                    'pinata_secret_api_key': '8b95b1587d1f8c525464b06203d2b28f6832af5525d001814c24b9774bcf1b80'
                }
            }
        ).then(function (response) {
            console.log("3456",response);
            //handle response here
        }).catch(function (error) {
            //handle error here
            console.error("error../",error);
        });
    };
 
    return (
        <>
        <Form onSubmit={formik.handleSubmit}>
            
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                name="description"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                />
            </Form.Group>

            <Form.Group controlId="supply">
                <Form.Label>Supply</Form.Label>
                <Form.Control
                name="supply"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.supply}
                />
            </Form.Group>
            <Form.Group controlId="unitPrice">
                <Form.Label>Unit Price</Form.Label>
                <Form.Control
                name="unitPrice"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.unitPrice}
                />
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Control
                type="file"
                className="custom-file-label"
                id="inputGroupFile01"
                label={fileName}
                onChange={(e) => setFileName(e.target.files[0])}
                custom
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                onClick={values => setFormState(values)}
                // disabled={formState}
            >
                Submit
            </Button>
            
         </Form>
         <Button onClick={pinFileToIPFS}>fss</Button>
         </>
    )
}
