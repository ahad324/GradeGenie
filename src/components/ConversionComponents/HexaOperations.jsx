import React, { useState } from "react";

const HexaOperations = () => {
  const [hexa1, setHexa1] = useState("");
  const [hexa2, setHexa2] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (operation) => {
    if (!/^[0-9A-Fa-f]+$/.test(hexa1) || !/^[0-9A-Fa-f]+$/.test(hexa2)) {
      alert("Please enter valid hexadecimal numbers.");
      return;
    }

    const num1 = parseInt(hexa1, 16);
    const num2 = parseInt(hexa2, 16);
    let calcResult;

    switch (operation) {
      case "add":
        calcResult = (num1 + num2).toString(16).toUpperCase();
        break;
      case "subtract":
        calcResult = (num1 - num2).toString(16).toUpperCase();
        break;
      case "multiply":
        calcResult = (num1 * num2).toString(16).toUpperCase();
        break;
      default:
        return;
    }

    setResult(calcResult);
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-accent">
        Hexadecimal Operations
      </h3>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Hexadecimal Number 1:
        </label>
        <input
          type="text"
          value={hexa1}
          onChange={(e) => setHexa1(e.target.value)}
          className="w-full p-3 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
          placeholder="Enter hexadecimal number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">
          Hexadecimal Number 2:
        </label>
        <input
          type="text"
          value={hexa2}
          onChange={(e) => setHexa2(e.target.value)}
          className="w-full p-3 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
          placeholder="Enter hexadecimal number"
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

export default HexaOperations;
