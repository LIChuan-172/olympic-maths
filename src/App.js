import React from "react";
import { render } from "react-dom";
import Layout from "./Layout";
import Head from "./Components/Head";
import Content from "./Components/Content";
import Foot from "./Components/Foot";

function App() {
  return (
    <div id="app">
      <Layout>
        <Head />
        <Content />
        <Foot />
      </Layout>
    </div>
  );
}

render(<App />, document.getElementById("root"));
