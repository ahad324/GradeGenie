import React, { useState } from "react";
import { FaTrashCan, FaPen, FaCopy, FaCheck } from "react-icons/fa6";
import AssessmentTable from "./AssessmentTable";
import ConfirmDialog from "../ConfirmDialog";

const ResultCard = ({
  subjects,
  onDeleteAssessment,
  setEditingAssessment,
  deleteTable,
}) => {
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [copiedSubject, setCopiedSubject] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const toggleExpand = (subjectName) => {
    setExpandedSubject(expandedSubject === subjectName ? null : subjectName);
  };

  // Function to handle copying subject name
  const handleCopySubject = (subjectName) => {
    navigator.clipboard.writeText(subjectName).then(() => {
      setCopiedSubject(subjectName);
      setTimeout(() => setCopiedSubject(null), 1000); // Reset after 1 second
    });
  };

  // Calculate SGPA
  const calculateSGPA = () => {
    const totalGradePoints = subjects.reduce(
      (acc, subject) => acc + subject.GPA * subject.creditHours,
      0
    );

    const totalCredits = subjects.reduce(
      (acc, subject) => acc + subject.creditHours,
      0
    );

    return totalCredits > 0
      ? (totalGradePoints / totalCredits).toFixed(2)
      : "0.00";
  };

  // Calculate Overall Percentage
  const calculatePercentage = () => {
    const totalObtained = subjects.reduce(
      (acc, subject) => acc + subject.totalObtained,
      0
    );

    const totalMax = subjects.reduce(
      (acc, subject) => acc + subject.totalMax,
      0
    );

    return totalMax > 0
      ? ((totalObtained / totalMax) * 100).toFixed(2)
      : "0.00";
  };

  // Determine Grade Based on Percentage
  const calculateGrade = (percentage) => {
    if (percentage >= 85) return "A";
    else if (percentage >= 80) return "A-";
    else if (percentage >= 75) return "B+";
    else if (percentage >= 71) return "B";
    else if (percentage >= 68) return "B-";
    else if (percentage >= 64) return "C+";
    else if (percentage >= 61) return "C";
    else if (percentage >= 58) return "C-";
    else if (percentage >= 54) return "D+";
    else if (percentage >= 50) return "D";
    else return "F";
  };

  const percentage = calculatePercentage();
  const grade = calculateGrade(percentage);

  const handleDeleteTable = () => {
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    deleteTable();
    setShowConfirmDialog(false);
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="mt-12 bg-secondary overflow-x-scroll md:overflow-auto p-6 rounded-lg shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-8">
        <h2 className="text-4xl text-accent font-semibold">Result Card</h2>
        {subjects.length > 0 && (
          <button
            type="button"
            className="flex items-center px-4 py-3 bg-red-500 hover:bg-red-600 hover:scale-110 text-white text-sm font-semibold shadow-lg rounded-lg transition-all duration-200"
            onClick={handleDeleteTable}
          >
            <FaTrashCan className="mr-2 size-4" /> Delete Table
          </button>
        )}
      </div>
      <table className="w-full border-collapse text-center">
        <thead className="bg-accent text-white text-xs md:text-base">
          <tr>
            <th className="p-3">Subject</th>
            <th className="p-3">Obtained Marks</th>
            <th className="p-3">Total Marks</th>
            <th className="p-3">GPA</th>
            <th className="p-3">Credit Hours</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <React.Fragment key={index}>
              <tr
                className={`border-b-2 border-dark cursor-pointer transition ${
                  expandedSubject === subject.name
                    ? "bg-dark text-lightText"
                    : "hover:bg-background"
                }`}
                onClick={() => toggleExpand(subject.name)}
              >
                <td className="p-3">
                  <div className="flex items-center justify-center space-x-2">
                    <span>{subject.name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click from triggering
                        handleCopySubject(subject.name);
                      }}
                      className="text-accent hover:text-primary hover:scale-110"
                      title="Copy Subject Name"
                    >
                      {copiedSubject === subject.name ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaCopy />
                      )}
                    </button>
                  </div>
                </td>
                <td className="p-3">{subject.totalObtained}</td>
                <td className="p-3">{subject.totalMax}</td>
                <td className="p-3">{subject.GPA}</td>
                <td className="p-3">{subject.creditHours}</td>
                <td className="p-3">
                  <button className="text-accent font-medium hover:text-primary  hover:scale-110">
                    <FaPen />
                  </button>
                </td>
              </tr>

              {expandedSubject === subject.name && (
                <tr>
                  <td colSpan="6">
                    <AssessmentTable
                      subjectIndex={index}
                      assessments={subject.assessments}
                      onDeleteAssessment={onDeleteAssessment}
                      setEditingAssessment={setEditingAssessment}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <ConfirmDialog
        isOpen={showConfirmDialog}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        title="Delete Result Table?"
        message="Are you sure you want to delete the entire result table? This action cannot be undone."
      />

      {/* Display SGPA, Percentage, and Grade Below the Table */}
      <div className="text-2xl text-center mt-12 md:text-3xl font-semibold">
        <h3 className="mb-3">
          SGPA: <span className="text-accent">{calculateSGPA()}</span>
        </h3>
        <h3 className="mb-3">
          Percentage: <span className="text-accent">{percentage}%</span>
        </h3>
        <h3>
          Grade:{" "}
          <span className={`${grade === "F" ? "text-red-500" : "text-accent"}`}>
            {grade}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default ResultCard;
