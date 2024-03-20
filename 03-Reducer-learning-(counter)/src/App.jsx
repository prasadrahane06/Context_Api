import React, { useReducer, useState } from "react";
import reducer from "./reducer";

const initialState = {
  count: 0,
};

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrementClick = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrementClick = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div classNameName="grid place-content-center items-center  w-full h-screen  ">
      <div classNameName="border-2 border-black w-60 h-40 flex flex-col items-center content-center:bg-yellow-200 sm:bg-slate-300">
        <div classNameName=" items-center place-content-center flex mt-3">
          <p classNameName="text-red-700 font-bold text-4xl">{state.count}</p>
        </div>
        <div classNameName="w-[110px] bg-slate-600 p-1 mt-3 rounded-xl text-white flex place-content-center ">
          <button
            classNameName="font-bold text-xl"
            onClick={handleIncrementClick}
          >
            Increment
          </button>
        </div>
        <div classNameName="w-[110px] bg-slate-600 p-1 mt-3 rounded-xl text-white">
          <button
            classNameName="font-bold text-xl"
            onClick={handleDecrementClick}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
