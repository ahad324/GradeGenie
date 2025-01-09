import React, { useState } from "react";

const BinaryToAll = () => {
  const [binary, setBinary] = useState("");
  const [results, setResults] = useState({ octal: "", decimal: "", hexa: "" });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setBinary(value);

    if (/^[01]+$/.test(value)) {
      setResults({
        octal: parseInt(value, 2).toString(8),
        decimal: parseInt(value, 2).toString(10),
        hexa: parseInt(value, 2).toString(16).toUpperCase(),
      });
    } else {
      setResults({ octal: "", decimal: "", hexa: "" });
    }
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-accent">
        Binary to All Conversions
      </h3>
      <input
        type="text"
        value={binary}
        onChange={handleInputChange}
        placeholder="Enter Binary Number"
        className="md:min-w-80 w-full p-3 border border-accent rounded-lg mb-4"
      />
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Octal:</span>{" "}
          {results.octal || "Invalid Input"}
        </p>
        <p>
          <span className="font-semibold">Decimal:</span>{" "}
          {results.decimal || "Invalid Input"}
        </p>
        <p>
          <span className="font-semibold">Hexadecimal:</span>{" "}
          {results.hexa || "Invalid Input"}
        </p>
      </div>
    </div>
  );
};

export default BinaryToAll;
