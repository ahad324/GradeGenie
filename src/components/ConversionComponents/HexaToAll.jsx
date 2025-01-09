import React, { useState } from "react";

const HexaToAll = () => {
  const [hexa, setHexa] = useState("");
  const [results, setResults] = useState({
    binary: "",
    octal: "",
    decimal: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setHexa(value);

    if (/^[0-9A-Fa-f]+$/.test(value)) {
      setResults({
        binary: parseInt(value, 16).toString(2),
        octal: parseInt(value, 16).toString(8),
        decimal: parseInt(value, 16).toString(10),
      });
    } else {
      setResults({ binary: "", octal: "", decimal: "" });
    }
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-accent">
        Hexadecimal to All
      </h3>
      <input
        type="text"
        value={hexa}
        onChange={handleInputChange}
        placeholder="Enter Hexadecimal Number"
        className="md:min-w-80 w-full p-3 border border-accent rounded-lg mb-4"
      />
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Binary:</span>{" "}
          {results.binary || "Invalid Input"}
        </p>
        <p>
          <span className="font-semibold">Octal:</span>{" "}
          {results.octal || "Invalid Input"}
        </p>
        <p>
          <span className="font-semibold">Decimal:</span>{" "}
          {results.decimal || "Invalid Input"}
        </p>
      </div>
    </div>
  );
};

export default HexaToAll;
