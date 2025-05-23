import React, { useState } from "react";
import { FaTrashCan, FaPen, FaCopy, FaCheck } from "react-icons/fa6";

const AssessmentTable = ({
  assessments,
  subjectIndex,
  onDeleteAssessment,
  setEditingAssessment,
}) => {
  const [copiedAssessment, setCopiedAssessment] = useState(null);

  const handleCopyAssessment = (assessmentName) => {
    navigator.clipboard.writeText(assessmentName).then(() => {
      setCopiedAssessment(assessmentName);
      setTimeout(() => setCopiedAssessment(null), 1000); // Reset after 1 second
    });
  };

  return (
    <div className="overflow-x-auto px-6">
      <table className="w-full border-2 border-gray-300 rounded-lg overflow-hidden text-center">
        <thead className="bg-accent text-white text-xs md:text-base">
          <tr>
            <th className="p-2">Assessment Name</th>
            <th className="p-2">Obtained Marks</th>
            <th className="p-2">Max Marks</th>
            <th className="p-2">Weightage (%)</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((assessment, index) => (
            <tr
              key={index}
              className="border-b-4 border-l-4 border-r-4 border-accent"
            >
              <td className="p-2 border-r border-primary">
                <div className="flex items-center justify-center space-x-2">
                  <span>{assessment.assessmentName}</span>
                  <button
                    onClick={() =>
                      handleCopyAssessment(assessment.assessmentName)
                    }
                    className="text-accent hover:text-primary hover:scale-110"
                    title="Copy Assessment Name"
                  >
                    {copiedAssessment === assessment.assessmentName ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                </div>
              </td>
              <td className="p-2 border-r border-primary">
                {assessment.obtainedMarks}
              </td>
              <td className="p-2 border-r border-primary">
                {assessment.maxMarks}
              </td>
              <td className="p-2 border-r border-primary">
                {assessment.weightage}
              </td>
              <td className="p-2 flex justify-center space-x-4">
                <button
                  onClick={() =>
                    setEditingAssessment({
                      ...assessment,
                      subjectName: assessment.subjectName,
                    })
                  }
                  className="text-accent hover:text-primary hover:scale-110 font-medium"
                >
                  <FaPen />
                </button>
                <button
                  onClick={() => onDeleteAssessment(subjectIndex, index)}
                  className="text-red-500 hover:text-red-600 hover:scale-110 font-medium"
                >
                  <FaTrashCan />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Message for No Assessments */}
      {assessments.length === 0 && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-500">No assessments added yet.</p>
        </div>
      )}
    </div>
  );
};

export default AssessmentTable;
