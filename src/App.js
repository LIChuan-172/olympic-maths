import React from "react";
import { render } from "react-dom";

import Queue from "./topics/queue/Queue";

function App() {
  return (
    <div id="app">
      <Queue />
    </div>
  );
}

render(<App />, document.getElementById("root"));
