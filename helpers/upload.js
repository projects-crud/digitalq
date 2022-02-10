const getApiConfig = async () => {
    const config = {
        headers: {
            Authorization: `Bearer ${PinataJWT}`,
        }
    };
    return config;
};

export const handleUpload = async (selectedFiles, customName, wrapWithDirectory) => {
    try {
        const data = new FormData();
        if (customName && customName !== '') {
            const metadata = JSON.stringify({
                name: customName
            });
            data.append('pinataMetadata', metadata);
        }

        if (selectedFiles.length > 0) {
            selectedFiles.forEach((file) => {
                data.append(`file`, file);
            });
        } else {
            data.append('file', selectedFiles[0], selectedFiles[0].name);
        }
        if (wrapWithDirectory === true) {
            const pinataOptions = JSON.stringify({
                wrapWithDirectory: true
            });
            data.append('pinataOptions', pinataOptions);
        }
        const res = await axios.post(`https://api.pinata.cloud/pinning/pinfFileToIPFS`, data, getApiConfig());

        return res.data;
    } catch (error) {
        //  Handle error
    }
};
