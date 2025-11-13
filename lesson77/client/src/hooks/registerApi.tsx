const URL = "http://localhost:8000/";
const REGISTER = URL + "register";

export interface registerTypes {
  name: string;
  age: number;
  email: string;
  password: string;
}

export default function registerApi({
  name,
  age,
  email,
  password,
}: registerTypes) {
  const getUser = async () => {
    const res = await fetch(REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: name,
        age: Number(age),
        email: email,
        password: password,
      }),
    });
    // console.log(res);
  };
  getUser();

  // const [result, setResult] = useState({
  //   isLoading: false,
  //   isError: false,
  //   data: {},
  // });
}
