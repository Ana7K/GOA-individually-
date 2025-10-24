import { useEffect } from "react";

function App() {
  useEffect(() => {
    const api = async () => {
      const response = await fetch("http://localhost:8000");
      const result = await response.json();
      console.log(result);
    };
    api();
  }, []);
  return <>bla bla bla</>;
}
export default App;
