const PinataJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2OWRhNTgxYS1iNTEyLTRmMGMtYWFkZS0wYTc2MTFiMDc4YTciLCJlbWFpbCI6InJhamt1bWFyQGNydWQtb3BlcmF0aW9ucy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYWI3ZjNmNDdkNmE5ZjkwMDRhMmUiLCJzY29wZWRLZXlTZWNyZXQiOiI4Yjk1YjE1ODdkMWY4YzUyNTQ2NGIwNjIwM2QyYjI4ZjY4MzJhZjU1MjVkMDAxODE0YzI0Yjk3NzRiY2YxYjgwIiwiaWF0IjoxNjQ0NTE1MDA0fQ.aSTN5cgeksFZVVGOfkTieMVwzY9HUH9cM-H9v_yz-X4";

const getApiConfig = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${PinataJWT}`,
    },
  };
  return config;
};

export const handleUpload = async (
  selectedFiles,
  customName,
  wrapWithDirectory
) => {
  try {
    const data = new FormData();
    if (customName && customName !== "") {
      const metadata = JSON.stringify({
        name: customName,
      });
      data.append("pinataMetadata", metadata);
    }

    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        data.append(`file`, file);
      });
    } else {
      data.append("file", selectedFiles[0], selectedFiles[0].name);
    }
    // if (wrapWithDirectory === true) {
    //     const pinataOptions = JSON.stringify({
    //         wrapWithDirectory: true
    //     });
    //     data.append('pinataOptions', pinataOptions);
    // }
    const res = await axios.post(
      `https://api.pinata.cloud/pinning/pinfFileToIPFS`,
      data,
      getApiConfig()
    );

    return res.data;
  } catch (error) {
    //  Handle error
  }
};
