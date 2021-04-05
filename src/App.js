import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Parent from "./Parent";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Pete");

  function handleButtonClicked(blahblah) {
    setName(blahblah);
  }

  function handleButtonReset(blahblah) {
    setName(blahblah);
  }

  return (
    <div className="App">
      <Parent
        handleButtonReset={handleButtonReset}
        handleButtonClicked={handleButtonClicked}
        name={name}
      />
    </div>
  );
}

export default App;
