import React, { useState } from "react";

const OctalOperations = () => {
  const [octal1, setOctal1] = useState("");
  const [octal2, setOctal2] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (operation) => {
    if (!/^[0-7]+$/.test(octal1) || !/^[0-7]+$/.test(octal2)) {
      alert("Please enter valid octal numbers.");
      return;
    }

    const num1 = parseInt(octal1, 8);
    const num2 = parseInt(octal2, 8);
    let calcResult;

    switch (operation) {
      case "add":
        calcResult = (num1 + num2).toString(8);
        break;
      case "subtract":
        calcResult = (num1 - num2).toString(8);
        break;
      case "multiply":
        calcResult = (num1 * num2).toString(8);
        break;
      default:
        return;
    }

    setResult(calcResult);
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-accent">
        Octal Operations
      </h3>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Octal Number 1:
        </label>
        <input
          type="text"
          value={octal1}
          onChange={(e) => setOctal1(e.target.value)}
          className="w-full p-3 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
          placeholder="Enter octal number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Octal Number 2:
        </label>
        <input
          type="text"
          value={octal2}
          onChange={(e) => setOctal2(e.target.value)}
          className="w-full p-3 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
          placeholder="Enter octal number"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => handleOperation("add")}
          className="px-6 py-3 bg-accent text-lightText rounded-lg shadow-md hover:bg-primary transition duration-200"
        >
          Add
        </button>
        <button
          onClick={() => handleOperation("subtract")}
          className="px-6 py-3 bg-accent text-lightText rounded-lg shadow-md hover:bg-primary transition duration-200"
        >
          Subtract
        </button>
        <button
          onClick={() => handleOperation("multiply")}
          className="px-6 py-3 bg-accent text-lightText rounded-lg shadow-md hover:bg-primary transition duration-200"
        >
          Multiply
        </button>
      </div>
      <div>
        <label className="block text-lg font-semibold mb-2">Result:</label>
        <input
          type="text"
          value={result}
          readOnly
          className="w-full p-3 border border-accent rounded-lg bg-background"
        />
      </div>
    </div>
  );
};

export default OctalOperations;
