import "./null_styles.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import Numbers from "./components/numbers";
import Operators from "./components/operators";
import "./App.css";
/* eslint no-eval: 0 */

function App() {
  const [str, setStr] = useState("");
  const [prevState, setPrevState] = useState("");

  function doCulc() {
    if (eval(str)) {
      setPrevState(str);
      setStr(eval(str));
    }
  }

  function handleClick(value) {
    if (value === "=") {
      doCulc();
    } else {
      setStr((prevValue) => prevValue + value);
    }
  }

  return (
    <div id="wrap">
      <div id="app">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            doCulc();
          }}
        >
          <TextField
            style={{ width: "100%", marginBottom: 15 }}
            required
            label={prevState}
            onChange={(e) => setStr(e.target.value)}
            value={str}
          />
        </form>
        <div id="btns">
          <Numbers handleClick={handleClick} />
          <Operators handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
