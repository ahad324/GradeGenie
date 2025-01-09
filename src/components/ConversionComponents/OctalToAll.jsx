import React, { useState } from "react";

const OctalToAll = () => {
  const [octal, setOctal] = useState("");
  const [results, setResults] = useState({ binary: "", decimal: "", hexa: "" });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setOctal(value);

    if (/^[0-7]+$/.test(value)) {
      setResults({
        binary: parseInt(value, 8).toString(2),
        decimal: parseInt(value, 8).toString(10),
        hexa: parseInt(value, 8).toString(16).toUpperCase(),
      });
    } else {
      setResults({ binary: "", decimal: "", hexa: "" });
    }
  };

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-accent">
        Octal to All Conversions
      </h3>
      <input
        type="text"
        value={octal}
        onChange={handleInputChange}
        placeholder="Enter Octal Number"
        className="md:min-w-80 w-full p-3 border border-accent rounded-lg mb-4"
      />
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Binary:</span>{" "}
          {results.binary || "Invalid Input"}
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

export default OctalToAll;
