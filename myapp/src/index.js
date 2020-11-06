// Import the react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react componet
const App = () => {
  return <div>Hola Mundo!</div>;
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
