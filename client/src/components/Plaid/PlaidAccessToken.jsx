import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:3001";

const PlaidAccessToken = ({ public_token, sendtoParent }) => {
  const [accessToken, setAccessToken] = useState();
  const handlesendtoParent = () => {
    sendtoParent(accessToken);
  };
  useEffect(() => {
    async function fetch() {
      let accessToken = await axios.post("/exchange_public_token", {
        public_token: public_token,
      });
      // console.log("access token : ", accessToken.data.accessToken);
      setAccessToken(accessToken.data.accessToken);
    }
    fetch();
  }, []);

  return handlesendtoParent();
};

export default PlaidAccessToken;
