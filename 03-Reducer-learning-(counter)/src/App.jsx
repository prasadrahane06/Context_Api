// import React, { useReducer, useState } from "react";
// import reducer from "./reducer";

// const initialState = {
//   count: 0,
// };

// function App() {
//   // const [count, setCount] = useState(0);
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const handleIncrementClick = () => {
//     dispatch({ type: "INCREMENT" });
//   };
//   const handleDecrementClick = () => {
//     dispatch({ type: "DECREMENT" });
//   };
//   return (
//     <div className="grid place-content-center items-center  w-full h-screen  ">
//       <div className="border-2 border-black w-60 h-40 flex flex-col items-center content-center:bg-yellow-200 sm:bg-slate-300">
//         <div className=" items-center place-content-center flex mt-3">
//           <p className="text-red-700 font-bold text-4xl">{state.count}</p>
//         </div>
//         <div className="w-[110px] bg-slate-600 p-1 mt-3 rounded-xl text-white flex place-content-center ">
//           <button className="font-bold text-xl" onClick={handleIncrementClick}>
//             Increment
//           </button>
//         </div>
//         <div className="w-[110px] bg-slate-600 p-1 mt-3 rounded-xl text-white">
//           <button className="font-bold text-xl" onClick={handleDecrementClick}>
//             Decrement
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//BACKGROUND CHANGER

import React from "react";
import { useState } from "react";
export default function App() {
  const [color, setColor] = useState("black");
  const handleColorChange = (newcolor) => {
    setColor(newcolor);
  };
  return (
    <div
      class="grid h-screen w-full place-content-center"
      style={{ backgroundColor: color }}
    >
      <div class="bg-black">
        <div class="grid place-content-center gap-3 rounded-lg w-full h-full  bg-white px-4 py-4 md:flex border-2 border-black">
          <button
            class="rounded-lg bg-green-800 px-2 py-1"
            onClick={() => handleColorChange("green")}
          >
            GREEN
          </button>
          <button
            class="rounded-lg bg-red-800 px-2 py-1"
            onClick={() => handleColorChange("red")}
          >
            RED
          </button>
          <button
            class="rounded-lg bg-orange-800 px-2 py-1"
            onClick={() => handleColorChange("orange")}
          >
            ORANGE
          </button>
          <button
            class="rounded-lg bg-pink-800 px-2 py-1"
            onClick={() => handleColorChange("pink")}
          >
            PINK
          </button>
          <button
            class="rounded-lg bg-yellow-300 px-2 py-1"
            onClick={() => handleColorChange("yellow")}
          >
            YELLOW
          </button>
          <button
            class="rounded-lg bg-blue-800 px-2 py-1"
            onClick={() => handleColorChange("blue")}
          >
            BLUE
          </button>
          <button
            class="rounded-lg bg-lime-400 px-2 py-1"
            onClick={() => handleColorChange("lime")}
          >
            LIME
          </button>
        </div>
      </div>
    </div>
  );
}
