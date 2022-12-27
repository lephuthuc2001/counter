import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  let color;

  color = count < 0 ? "purple" : count > 0 ? "turquoise" : "black";

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div class="container">
      <h1>Counter</h1>
      <span style={{ color: color }} id="value">
        {count}
      </span>
      <div class="btn-group">
        <button onClick={decrease} className="btn" id="decrease">
          Decrease
        </button>
        <button onClick={reset} className="btn" id="reset">
          Reset
        </button>
        <button onClick={increase} className="btn" id="increase">
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
