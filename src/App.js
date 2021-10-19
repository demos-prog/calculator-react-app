import "./null_styles.css";
import "./App.css";
import Numbers from "./components/numbers";
import Operators from "./components/operators";

function handleClick(value) {
  console.log(value);
}

function App() {
  return (
    <div id="wrap">
      <div id="app">
        <div id="btns">
          <Numbers handleClick={handleClick} />
          <Operators handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
