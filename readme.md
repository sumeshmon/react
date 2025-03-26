<!-- statement is used in React 18+ to create a root for rendering a React application. -->
import { createRoot } from "react-dom/client"

<!-- legacy example for createRoot -->
<!-- import React from "react";
import ReactDOM from "react-dom"; -->
<!-- ReactDOM.render(<App />, document.getElementById("root")); -->

<!-- createElement -->
<!-- The import { createElement } from "react" statement is used to create React elements without JSX. Its just a regular jacascript object -->
<!-- React.createElement(type, props, ...children); -->


<!-- creating elements using createRoot-->
// 1. Create a root
const root = createRoot(document.getElementById("root"))
// 2. Render some markup to the root
root.render(<h1>Hello, React!</h1>) 



