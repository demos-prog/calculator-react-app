import { Button } from "@mui/material";
import "./operators.css";

export default function Operators({ handleClick }) {
  return (
    <div id="operatorsWrap">
      <Button onClick={() => handleClick("del")} variant="outlined">
        del
      </Button>
      <Button onClick={() => handleClick("+")} variant="outlined">
        +
      </Button>
      <Button onClick={() => handleClick("-")} variant="outlined">
        -
      </Button>
      <Button onClick={() => handleClick("*")} variant="outlined">
        *
      </Button>
      <Button onClick={() => handleClick("/")} variant="outlined">
        /
      </Button>
    </div>
  );
}
