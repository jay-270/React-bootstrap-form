import React, { Fragment } from "react";
import Form1 from "./components/Form1";
import Tble1 from "./components/Tble1";
import "./styles/app.scss";

const App = () => {
  // const items = JSON.parse(localStorage.getItem());

  return (
    <div className="wh">
      <div className="fr">
        <Form1 />
      </div>
      <div className="table">
        <Tble1 className="tb" />
      </div>
    </div>
  );
};

export default App;
