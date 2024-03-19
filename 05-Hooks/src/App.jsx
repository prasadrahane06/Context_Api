// //BACKGROUND CHANGER

// import React from "react";
// import { useState } from "react";
// export default function App() {
//   const [color, setColor] = useState("black");
//   const handleColorChange = (newcolor) => {
//     setColor(newcolor);
//   };
//   return (
//     <div
//       class="grid h-screen w-full place-content-center"
//       style={{ backgroundColor: color }}
//     >
//       <div class="bg-black">
//         <div class="grid place-content-center gap-3 rounded-lg w-full h-full  bg-white px-4 py-4 md:flex border-2 border-black">
//           <button
//             class="rounded-lg bg-green-800 px-2 py-1"
//             onClick={() => handleColorChange("green")}
//           >
//             GREEN
//           </button>
//           <button
//             class="rounded-lg bg-red-800 px-2 py-1"
//             onClick={() => handleColorChange("red")}
//           >
//             RED
//           </button>
//           <button
//             class="rounded-lg bg-orange-800 px-2 py-1"
//             onClick={() => handleColorChange("orange")}
//           >
//             ORANGE
//           </button>
//           <button
//             class="rounded-lg bg-pink-800 px-2 py-1"
//             onClick={() => handleColorChange("pink")}
//           >
//             PINK
//           </button>
//           <button
//             class="rounded-lg bg-yellow-300 px-2 py-1"
//             onClick={() => handleColorChange("yellow")}
//           >
//             YELLOW
//           </button>
//           <button
//             class="rounded-lg bg-blue-800 px-2 py-1"
//             onClick={() => handleColorChange("blue")}
//           >
//             BLUE
//           </button>
//           <button
//             class="rounded-lg bg-lime-400 px-2 py-1"
//             onClick={() => handleColorChange("lime")}
//           >
//             LIME
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//Random Text Generator usecallback function
// import React, { useState, useCallback, useEffect, useRef } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numbers, setNumbers] = useState(false);
//   const [char, setChar] = useState(false);
//   const [password, setPassword] = useState("");
//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numbers) str += "0123456789";
//     if (char) str += "~!@#$%&'()*+,-./:;<=>?[]{}|";
//     for (let i = 1; i <= length; i++) {
//       let character = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(character);
//       setPassword(pass);
//     }
//   }, [length, numbers, char, password, setPassword]);
//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 101);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);
//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numbers, char]);
//   const passwordRef = useRef(null);

//   return (
//     <div class="w-full grid h-screen place-content-center bg-black">
//       <p className="text-white flex place-content-center text-[35px] py-4">
//         Password Generator
//       </p>
//       <div class="h-full w-full rounded-lg bg-slate-600 px-4 py-4 shadow-lg">
//         <div class="flex py-3">
//           <input
//             type="text"
//             class="w-full rounded-sm text-orange-500"
//             placeholder="Password"
//             value={password}
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             className="outline-none bg-blue-700 text-white  px-2 py-0.s shrink-0 "
//             onClick={copyPasswordToClipboard}
//           >
//             COPY
//           </button>
//         </div>

//         <div class="grid place-content-start gap-2 md:flex cursor-pointer">
//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             onChange={(e) => {
//               setLength(e.target.value);
//             }}
//           />
//           <p class="text-orange-500">Length ({length})</p>
//           <div class="md:flex md:gap-3">
//             <div class="flex gap-1">
//               <input
//                 type="checkbox"
//                 defaultChecked={numbers}
//                 onChange={() => {
//                   //make flase to true and true to false
//                   setNumbers((prev) => !prev);
//                 }}
//               />
//               <p class="text-orange-500">Numbers</p>
//             </div>
//             <div class="flex gap-1">
//               <input
//                 type="checkbox"
//                 defaultChecked={char}
//                 onChange={() => {
//                   setChar((prev) => !prev);
//                 }}
//               />
//               <p class="text-orange-500">Characters</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useMemo, useEffect } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {
    // Simulating a slow function
  }
  return num * 2;
}
