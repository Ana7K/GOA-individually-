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
      const url =
        "https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "30e6cc37cfmsh6e0f502f962859cp1c8176jsnccf22633054e",
          "x-rapidapi-host": "imdb236.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          setData({ ...data, error: new Error("API request failed") });
          return;
        }
        const result = await response.json();
        setData({ ...data, isLoading: false, data: result });
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    api();
  }, []);

  return data;
}
