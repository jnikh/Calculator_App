import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import Buttonbox from "./components/Buttonbox";
import Button from "./components/Button";
import CalcProvider from "./Context/CalcContext";


const btnValues = [
  ["c", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
 
  
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <Buttonbox>
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </Buttonbox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
