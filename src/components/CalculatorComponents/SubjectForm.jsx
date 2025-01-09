import { useState, useEffect } from "react";
import { FaPlus, FaSyncAlt } from "react-icons/fa";

const SubjectForm = ({
  onAddOrUpdate,
  existingSubjects,
  editingAssessment,
  setEditingAssessment,
}) => {
  const [subjectName, setSubjectName] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [assessmentName, setAssessmentName] = useState("");
  const [obtainedMarks, setObtainedMarks] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [weightage, setWeightage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  // Generate unique IDs for accessibility
  const generateId = (prefix) => `${prefix}-${Date.now()}-${Math.random()}`;
  const ids = {
    subjectName: generateId("subjectName"),
    creditHours: generateId("creditHours"),
    assessmentName: generateId("assessmentName"),
    obtainedMarks: generateId("obtainedMarks"),
    maxMarks: generateId("maxMarks"),
    weightage: generateId("weightage"),
  };

  useEffect(() => {
    if (editingAssessment) {
      setSubjectName(editingAssessment.subjectName);
      setAssessmentName(editingAssessment.assessmentName);
      setCreditHours(editingAssessment.creditHours);
      setObtainedMarks(editingAssessment.obtainedMarks);
      setMaxMarks(editingAssessment.maxMarks);
      setWeightage(editingAssessment.weightage);
      setIsUpdating(true);
    }
  }, [editingAssessment]);

  useEffect(() => {
    if (!subjectName?.trim()) {
      setIsUpdating(false);
      return;
    }

    const existingSubject = existingSubjects?.find(
      (subject) => subject?.name?.toLowerCase() === subjectName?.toLowerCase()
    );

    if (existingSubject) {
      setCreditHours(existingSubject.creditHours);
      setIsUpdating(true);
    } else {
      setIsUpdating(false);
      setCreditHours("");
    }
  }, [subjectName, existingSubjects]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !subjectName ||
      !creditHours ||
      !assessmentName ||
      !obtainedMarks ||
      !maxMarks ||
      !weightage
    ) {
      alert("Please fill all the fields.");
      return;
    }
    if (Number(obtainedMarks) > Number(maxMarks)) {
      alert("Obtained marks cannot exceed maximum marks.");
      return;
    }

    const assessment = {
      subjectName,
      assessmentName,
      creditHours: Number(creditHours),
      obtainedMarks: Number(obtainedMarks),
      maxMarks: Number(maxMarks),
      weightage: Number(weightage),
    };

    onAddOrUpdate(assessment, isUpdating);
    clearForm();
  };

  const clearForm = () => {
    setAssessmentName("");
    setObtainedMarks("");
    setMaxMarks("");
    setWeightage("");
    setIsUpdating(false);
    setEditingAssessment(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondary shadow-2xl p-6 sm:p-8 rounded-lg"
    >
      {/* Upper Part: Subject Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor={ids.subjectName}
            className="block text-lg font-semibold"
          >
            Subject Name
          </label>
          <input
            type="text"
            id={ids.subjectName}
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="w-full p-3 mt-1 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor={ids.creditHours}
            className="block text-lg font-semibold"
          >
            Credit Hours
          </label>
          <input
            type="number"
            id={ids.creditHours}
            value={creditHours}
            onChange={(e) => setCreditHours(e.target.value)}
            className="w-full p-3 mt-1 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
            disabled={isUpdating}
            required
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 my-6" />

      {/* Lower Part: Assessments */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-primary">Assessments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor={ids.assessmentName}
              className="block text-lg font-semibold"
            >
              Assessment Name
            </label>
            <input
              type="text"
              id={ids.assessmentName}
              value={assessmentName}
              onChange={(e) => setAssessmentName(e.target.value)}
              className="w-full p-3 mt-1 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor={ids.obtainedMarks}
              className="block text-lg font-semibold"
            >
              Obtained Marks
            </label>
            <input
              type="number"
              id={ids.obtainedMarks}
              value={obtainedMarks}
              onChange={(e) => setObtainedMarks(e.target.value)}
              className="w-full p-3 mt-1 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor={ids.maxMarks}
              className="block text-lg font-semibold"
            >
              Max Marks
            </label>
            <input
              type="number"
              id={ids.maxMarks}
              value={maxMarks}
              onChange={(e) => setMaxMarks(e.target.value)}
              className="w-full p-3 mt-1 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor={ids.weightage}
              className="block text-lg font-semibold"
            >
              Weightage
            </label>
            <input
              type="number"
              id={ids.weightage}
              value={weightage}
              onChange={(e) => setWeightage(e.target.value)}
              className="w-full p-3 mt-1 border border-accent rounded-lg focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="flex items-center px-6 py-3 bg-accent text-white font-semibold shadow-lg rounded-lg hover:bg-primary transition-all duration-200"
        >
          {isUpdating ? (
            <>
              <FaSyncAlt className="mr-2" /> Update Subject
            </>
          ) : (
            <>
              <FaPlus className="mr-2" /> Add Subject
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default SubjectForm;
