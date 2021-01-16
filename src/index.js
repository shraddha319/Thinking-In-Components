import React from "react";
import ReactDOM from "react-dom";

import BlogReact from "./BlogReact";

const rootElement = document.getElementById("reaction");
ReactDOM.render(
  <React.StrictMode>
    <BlogReact />
  </React.StrictMode>,
  rootElement
);
