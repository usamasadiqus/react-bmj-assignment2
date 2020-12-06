import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  let [count, setCount] = useState(0);
  let [isDay, setDay] = useState(true);
  return (
    <div className={`container ${isDay ? "dayColorYellow" : "dayColorGrey"}`}>
      <h1>Counter + Change Background Color App Using (useState) Hook</h1>
      <div className="card">
        <div className="text">
          <p>Counter value: {count}</p>
        </div>
        <div className="buttons">
          <button onClick={() => setCount(++count)}>Increment</button>
          <button onClick={() => setCount(--count)}>Decrement</button>
        </div>
      </div>
      <button onClick={() => setDay(!isDay)}>Update Day</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
