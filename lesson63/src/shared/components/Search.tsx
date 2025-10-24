import { useEffect, useState } from "react";
import axios from "axios";

// Unsplash Access Key from environment variables
const ACCESS_KEY = import.meta.env.VITE_YOUR_ACCESS_KEY;

export default function useSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // Reset images array when the query changes
  useEffect(() => {
    setImages([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;

    axios({
      method: "GET",
      url: `https://api.unsplash.com/search/collections/`,
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params: { query: query, page: pageNumber, per_page: 20 },
      cancelToken: new axios.CancelToken((c: any) => (cancel = c)),
    })
      .then((res: any) => {
        setImages((prevImages) => {
          return [
            ...new Set([ // will return only unique values
              ...prevImages,
              ...res?.data?.results?.map((i: any) => i?.cover_photo?.urls?.full),
            ]),
          ];
        });
        setHasMore(res.data.results.length > 0); // have no more data because no more images to show
        setLoading(false);
        console.log(res.data.results);
        console.log(images);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  return { loading, error, images, hasMore };
}
