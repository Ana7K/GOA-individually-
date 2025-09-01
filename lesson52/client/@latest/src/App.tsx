import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";

interface SendDataInterface {
  _id: ReactNode;
  name: string;
  age: number;
}

export default function App() {
  const [data, setData] = useState<SendDataInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false); // ! LOADING SCREEN
  const [sendData, setSendData] = useState({
    name: "",
    age: 0,
  });
  const PORT = `http://localhost:8000/`;
  const GET_LOMI = PORT + "lomebi";
  // const GET_VEFXVI = PORT + "vefxvebi";
  // const GET_MGELI = PORT + "mglebi";

  useEffect(() => {
    // /////////fetch
    // async function getLomebi() {
    //   const getData = await fetch(GET_LOMI).then((data) => data);
    //   const response = await getData.json();
    //   console.log(response);
    // }
    // getLomebi();

    // async function getVefxvebi() {
    //   const getData = await fetch(GET_VEFXVI).then((data) => data);
    //   const response = await getData.json();
    //   console.log(response);
    // }
    // getVefxvebi();

    // async function getMglebi() {
    //   const getData = await fetch(GET_MGELI).then((data) => data);
    //   const response = await getData.json();
    //   console.log(response);
    // }
    // getMglebi();
    /////axios
    async function getApi() {
      const getURL = await axios.get(GET_LOMI);
      console.log("Status ok");
      const response = getURL.data;
      setData(response);
      setIsLoading(true); // ! LOADING SCREEN
    }
    getApi();
  }, []);
  const handleSendData = async (e: any) => {
    setIsLoading(false); // ! LOADING SCREEN
    e.preventDefault();
    const res = await axios.post(GET_LOMI, sendData);
    console.log("timer");
    if (res.status == 201) {
      setIsLoading(true);
    }
  };
  console.log(sendData);

  const handleDelete = async () => {};

  return (
    <div>
      <form>
        <label htmlFor="name">name: </label>
        <input
          type="text"
          id="name"
          placeholder="enter name"
          name="name"
          className="border rounded p-2"
          onChange={(e) => setSendData({ ...sendData, name: e.target.value })}
          value={sendData?.name}
        />
        <br />
        <button
          onClick={handleSendData}
          className="gap-2 flex justify-center items-center cursor-pointer border border-black rounded p-2 bg-red-500 text-white"
          type="submit"
        >
          <span>submit</span>
          {!isLoading && ( // ! LOADING SCREEN
            <div className="rounded-full border-r-2 size-3 animate-spin" />
          )}
        </button>
        {/* ! LOADING SCREEN */}
        {!isLoading && <p className="text-orange-500">your info is sending!</p>}
      </form>
      <h2>LOMEBI LIST</h2>
      <div>
        {isLoading ? ( // ! LOADING SCREEN
          data.map((item, index) => (
            <div key={index}>
              <span>
                {item?._id} &nbsp; {item?.name}
              </span>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => handleDelete()}
              >
                delete
              </button>
              <button className="bg-red-500 text-white p-2 rounded">
                edit
              </button>
            </div>
          ))
        ) : (
          <div className="flex items-center">
            <div className="rounded-full border-r-2 size-3 animate-spin border-red-500" />
          </div>
        )}
      </div>
    </div>
  );
}
