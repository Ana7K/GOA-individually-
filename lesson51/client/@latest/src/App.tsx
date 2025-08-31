import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    const PORT = `http://localhost:8000/`;
    const GET_LOMI = PORT + "lomebi";
    const GET_VEFXVI = PORT + "vefxvebi";
    const GET_MGELI =  PORT + "mglebi";

    /////////fetch
    async function getLomebi() {
      const getData = await fetch(GET_LOMI).then((data) => data);
      const response = await getData.json();
      console.log(response);
    }
    getLomebi();

    async function getVefxvebi() {
      const getData = await fetch(GET_VEFXVI).then((data) => data);
      const response = await getData.json();
      console.log(response);
    }
    getVefxvebi();

    async function getMglebi() {
      const getData = await fetch(GET_MGELI).then((data) => data);
      const response = await getData.json();
      console.log(response);
    }
    getMglebi();
    ///////axios
    // async function getApi() {
    //   const getURL = await axios.get(GET_LOMI);
    //   const response = getURL.data;
    //   setData(response);
    // }
    // getApi();
  }, []);
  console.log(data);
  return <div>App</div>;
}
