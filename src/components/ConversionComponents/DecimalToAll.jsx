import React, { useState } from "react";

const DecimalToAll = () => {
  const [decimal, setDecimal] = useState("");
  const [results, setResults] = useState({ binary: "", octal: "", hexa: "" });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDecimal(value);

    if (/^\d+$/.test(value)) {
      setResults({
        binary: parseInt(value, 10).toString(2),
        octal: parseInt(value, 10).toString(8),
        hexa: parseInt(value, 10).toString(16).toUpperCase(),
      });
    } else {
      setResults({ binary: "", octal: "", hexa: "" });
    }
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-accent">
        Decimal to All Conversions
      </h3>
      <input
        type="text"
        value={decimal}
        onChange={handleInputChange}
        placeholder="Enter Decimal Number"
        className="md:md:min-w-80 w-full p-3 border border-accent rounded-lg mb-4"
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
          <span className="font-semibold">Hexadecimal:</span>{" "}
          {results.hexa || "Invalid Input"}
        </p>
      </div>
    </div>
  );
};

export default DecimalToAll;
