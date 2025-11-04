// import { useEffect, useState } from "react";
const URL = "http://localhost:8000/";
const LOGIN = URL + "login";

export interface loginTypes {
  email: string;
  password: string;
}

export default function loginApi({ email, password }: loginTypes) {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [isData, setIsData] = useState([]);

  // isLoading, data, error
  const getUser = async () => {
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(res);
  };
  return getUser();

  // const [result, setResult] = useState({
  //   isLoading: false,
  //   isError: false,
  //   data: {},
  // });
}
