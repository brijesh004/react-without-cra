import React from "react";
import "./styles.css";
import ImagePNG from "./images/react1.png";
import ImageSVG from "./images/react2.svg";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <div className="main">App Without CRA check</div>
      <img src={ImagePNG} width="50px" height="50px" />
      <img src={ImageSVG} width="50px" height="50px" />
      <Counter />
    </>
  );
};

export default App;
