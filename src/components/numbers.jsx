import { Grid, Button } from "@mui/material";
import "./numbers.css";

export default function Numbers({ handleClick }) {
  const arr = [];
  for (let i = 1; i < 10; i++) {
    arr.push(
      <Grid className="btn" key={i} item xs={4}>
        <Button onClick={() => handleClick("" + i)} variant="outlined">
          {i}
        </Button>
      </Grid>
    );
  }

  return (
    <div id="numbersWrapper">
      <Grid container spacing={0.5}>
        {arr}
        <Grid item xs={8}>
          <Button
            style={{ width: "100%" }}
            onClick={() => handleClick(0)}
            variant="outlined"
          >
            0
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => handleClick("=")} variant="outlined">
            =
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
