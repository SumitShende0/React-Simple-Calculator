import { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const handleInputreset = () => {
    setInput1("");
    setInput2("");
  };

  const handleResultreset = () => {
    setResult("");
  };

  const handleAddition = () => {
    setResult(parseInt(input1) + parseInt(input2));
  };

  const handleSubstraction = () => {
    setResult(parseInt(input1) - parseInt(input2));
  };

  const handleMultiplication = () => {
    setResult(parseInt(input1) * parseInt(input2));
  };

  const handleDivision = () => {
    setResult(parseInt(input1) / parseInt(input2));
  };

  return (
    <div className="container">
      <input
        type="number"
        value={input1}
        onChange={(event) => setInput1(event.target.value)}
        placeholder="Enter number"
      />
      <input
        type="number"
        value={input2}
        onChange={(event) => setInput2(event.target.value)}
        placeholder="Enter number"
      />
      <input type="text" value={result} disabled />

      <div className="btn-all">
        <button className="btn" onClick={handleAddition}>
          Add
        </button>
        <button className="btn" onClick={handleSubstraction}>
          Sub
        </button>
        <button className="btn" onClick={handleMultiplication}>
          Multi
        </button>
        <button className="btn" onClick={handleDivision}>
          Div
        </button>
      </div>

      <button className="btn-reset" onClick={handleInputreset}>
        Clear Input
      </button>
      <button className="btn-reset" onClick={handleResultreset}>
        Clear Result
      </button>
    </div>
  );
}

export default App;
