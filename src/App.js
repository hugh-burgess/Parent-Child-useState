import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Parent from "./Parent";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Pete");

  function handleButtonClicked(onClick) {
    setName("Dave");
  }

  function handleButtonReset(onClick) {
    setName(name);
  }

  function updateName(updateName) {
    setName(updateName);
  }
  return (
    <div className="App">
      <Parent
        handleButtonReset={handleButtonReset}
        handleButtonClicked={handleButtonClicked}
        name={name}
        updateName={updateName}
      />
    </div>
  );
}

export default App;
