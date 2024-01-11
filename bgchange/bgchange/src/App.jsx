import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-xl">
          <button className=" outline-1 px-4 py-1 bg-red-400 rounded-lg" onClick={()=> setColor("red")}>
            Red
          </button>
          <button className=" outline-1 px-4 py-1 bg-green-400 rounded-lg" onClick={() => setColor("green")}>
            Green
          </button>
          <button className=" outline-1 px-4 py-1 bg-yellow-400 rounded-lg" onClick={() => setColor("yellow")}>
            Yellow
          </button>
          <button className=" outline-1 px-4 py-1 bg-gray-700 rounded-lg" onClick={() => setColor("grey")}>
            Grey
          </button>
        </div>


      </div>
    </div>
  );
}

export default App;
