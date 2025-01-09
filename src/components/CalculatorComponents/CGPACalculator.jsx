import React, { useState } from "react";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([{ sgpa: "" }]);

  const addSemester = () => {
    if (semesters.length >= 10) {
      alert("You cannot add more than 10 semesters.");
      return;
    }
    setSemesters([...semesters, { sgpa: "" }]);
  };

  const deleteSemester = (index) => {
    if (semesters.length === 1) {
      alert("You must have at least one semester.");
      return;
    }
    const updatedSemesters = semesters.filter((_, i) => i !== index);
    setSemesters(updatedSemesters);
  };

  const calculateCGPA = () => {
    const total = semesters.reduce(
      (acc, cur) => acc + Number(cur.sgpa || 0),
      0
    );
    return (total / semesters.length).toFixed(2);
  };

  return (
    <div className="bg-secondary p-8 rounded-lg shadow-2xl mt-12 max-w-3xl mx-auto">
      <h1 className="text-center text-primary">CGPA Calculator</h1>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Enter your SGPA to compute your cumulative GPA accurately.
      </p>

      {semesters.map((sem, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 mb-4 bg-gray-100 p-4 rounded-lg"
        >
          <label className="text-lg font-semibold">Semester {index + 1}</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="10"
            value={sem.sgpa}
            onChange={(e) =>
              setSemesters(
                semesters.map((s, i) =>
                  i === index ? { sgpa: e.target.value } : s
                )
              )
            }
            className="w-52 p-3 border border-primary rounded-lg focus:ring-2 focus:ring-secondary"
            placeholder="SGPA"
          />

          {semesters.length > 1 && (
            <button
              onClick={() => deleteSemester(index)}
              className="text-red-500 hover:text-red-600"
            >
              <FaTrashAlt size={20} />
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addSemester}
        className="flex items-center bg-accent hover:bg-primary text-white px-6 py-3 rounded-full shadow-lg transition"
      >
        <FaPlusCircle className="mr-3" /> Add Semester
      </button>

      <p className="text-center mt-10 text-2xl">
        Final CGPA:{" "}
        <span className="text-primary font-bold">{calculateCGPA()}</span>
      </p>
    </div>
  );
};

export default CGPACalculator;
