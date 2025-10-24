import { useEffect, useState } from "react";

export default function useApi() {
  const [data, setData] = useState<{
    data: any;
    error: null | Error;
    isLoading: boolean;
  }>({
    data: {},
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    const api = async () => {
      const url = "https://house-plants2.p.rapidapi.com/search?query=Fern";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e8f8bbf678msheb0a18e1406d67cp12a5c2jsn797964213bc0",
          "x-rapidapi-host": "house-plants2.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          setData({ ...data, error: new Error("API request failed") });
          // throw new Error("api request failed");
          return;
        }
        const result = await response.json();
        setData({ ...data, isLoading: false, data: result });
        // console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    api();
  }, []);

  return data;
}
