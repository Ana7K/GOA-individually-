import { useState } from "react";

export default function App() {
  const name = "davit";
  let counter = 0;
  // final variable  update variable
  const [increment, setIncrement] = useState(0);

  // ##### Increment function
  const handleIncrement = () => {
    console.log("Increment");
    // setIncrement(increment + 1);
    incrementBy20();
  };
  const handleDecrement = () => {
    console.log("Decrement");
    // setDecrement(decrement - 1);
    decrementBy20();
  };
  const incrementBy20 = () => {
    console.log("+20");
    setIncrement(increment + 20);
  };
  const decrementBy20 = () => {
    console.log("-20");
    setIncrement(increment - 20);
  };
  return (
    <div className="flex">
      <div className=" rounded-xl p-2 bg-gray-200 text-gray-400 font-bold">
        <div className="flex gap-4 [&_button]:cursor-pointer [&_button]:text-gray-50 [&_button]:bg-gray-500 [&_button]:size-5 [&_button]:rounded-full [&_button]:flex [&_button]:items-center [&_button]:justify-center">
          <button
            onClick={handleIncrement}
            // onClick={() => handleIncrement()}
            // onClick={() => {
            //   const name = "davit"
            //   console.log(name)
            //   return;
            // }}
          >
            +
          </button>
          {increment}
          <button onClick={handleDecrement}>-</button>
          <br />
          <button className="" onClick={incrementBy20}>
            +20
          </button>
        </div>
        {/* <MyApp /> */}
      </div>
    </div>
  );
}
// const MyApp = () => (
//     <div>
//       lommi
//     </div>
// )
