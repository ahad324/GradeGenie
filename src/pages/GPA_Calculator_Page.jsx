import React, { useState, useEffect } from "react";
import SubjectForm from "../components/CalculatorComponents/SubjectForm";
import ResultCard from "../components/CalculatorComponents/ResultCard";
import { Helmet } from "react-helmet-async";
import Table from "../components/Table";

const GPA_Calculator_Page = () => {
  const [subjects, setSubjects] = useState([]);
  const [editingAssessment, setEditingAssessment] = useState(null);
  // Grade and GPA criteria
  const gradeCriteria = {
    title: "Grade Criteria",
    headers: ["Percentage Range", "Grade"],
    data: [
      { range: "85% to 100%", grade: "A" },
      { range: "80% to 84%", grade: "A-" },
      { range: "75% to 79%", grade: "B+" },
      { range: "71% to 74%", grade: "B" },
      { range: "68% to 70%", grade: "B-" },
      { range: "64% to 67%", grade: "C+" },
      { range: "61% to 63%", grade: "C" },
      { range: "58% to 60%", grade: "C-" },
      { range: "54% to 57%", grade: "D+" },
      { range: "50% to 53%", grade: "D" },
      { range: "0% to 49%", grade: "F" },
    ],
  };

  const gpaCriteria = {
    title: "GPA Calculation Criteria",
    headers: ["Percentage Range", "GPA"],
    data: [
      { range: "85% and above", gpa: "4.0" },
      { range: "80% - 84%", gpa: "3.66" },
      { range: "75% - 79%", gpa: "3.33" },
      { range: "70% - 74%", gpa: "3.0" },
      { range: "65% - 69%", gpa: "2.66" },
      { range: "60% - 64%", gpa: "2.33" },
      { range: "55% - 59%", gpa: "2.0" },
      { range: "50% - 54%", gpa: "1.66" },
      { range: "Below 50%", gpa: "0.0" },
    ],
  };
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("GradeCalculator")) || [];
    setSubjects(savedData);
  }, []);

  const handleAddOrUpdate = (assessment, isUpdating) => {
    const updatedSubjects = [...subjects];
    const index = subjects.findIndex(
      (subject) =>
        subject.name.toLowerCase() === assessment.subjectName.toLowerCase()
    );

    // Calculate weighted obtained marks for the assessment
    const weightedObtained = (
      (assessment.obtainedMarks / assessment.maxMarks) *
      assessment.weightage
    ).toFixed(2);

    if (isUpdating && index !== -1) {
      const subject = updatedSubjects[index];
      const assessmentIndex = subject.assessments.findIndex(
        (a) => a.assessmentName === assessment.assessmentName
      );

      if (assessmentIndex !== -1) {
        // Update existing assessment
        const oldAssessment = subject.assessments[assessmentIndex];

        // Subtract the old weighted obtained marks
        const oldWeightedObtained = (
          (oldAssessment.obtainedMarks / oldAssessment.maxMarks) *
          oldAssessment.weightage
        ).toFixed(2);
        subject.totalObtained -= Number(oldWeightedObtained);
        subject.totalMax -= oldAssessment.weightage;

        // Replace with updated assessment
        subject.assessments[assessmentIndex] = { ...assessment };
      } else {
        // Add new assessment
        subject.assessments.push({ ...assessment });
      }

      // Update subject's total obtained marks and weightage
      subject.totalObtained += Number(weightedObtained);
      subject.totalMax += Number(assessment.weightage);

      // Recalculate GPA based on overall percentage
      const percentage = (subject.totalObtained / subject.totalMax) * 100;
      subject.GPA = calculateGPA(percentage);
    } else {
      // Create new subject entry if not already existing
      updatedSubjects.push({
        name: assessment.subjectName,
        creditHours: assessment.creditHours,
        assessments: [{ ...assessment }],
        totalObtained: Number(weightedObtained), // Use weighted value here
        totalMax: Number(assessment.weightage), // Sum of weightage for total
        GPA: calculateGPA(
          (assessment.obtainedMarks / assessment.maxMarks) * 100
        ),
      });
    }

    setSubjects(updatedSubjects);
    localStorage.setItem("GradeCalculator", JSON.stringify(updatedSubjects));
  };

  const handleDeleteAssessment = (subjectIndex, assessmentIndex) => {
    const updatedSubjects = [...subjects];
    const subject = updatedSubjects[subjectIndex];
    const assessmentToRemove = subject.assessments[assessmentIndex];

    // Calculate the weighted marks to subtract
    const weightedObtained = (
      (assessmentToRemove.obtainedMarks / assessmentToRemove.maxMarks) *
      assessmentToRemove.weightage
    ).toFixed(2);

    // Subtract from total obtained and total weightage
    subject.totalObtained -= Number(weightedObtained);
    subject.totalMax -= assessmentToRemove.weightage;

    // Remove the assessment from the list
    subject.assessments.splice(assessmentIndex, 1);

    // If no assessments are left, delete the subject
    if (subject.assessments.length === 0) {
      updatedSubjects.splice(subjectIndex, 1);
    } else {
      // Recalculate GPA based on remaining assessments
      const percentage = (subject.totalObtained / subject.totalMax) * 100;
      subject.GPA = calculateGPA(percentage);
    }

    setSubjects(updatedSubjects);
    localStorage.setItem("GradeCalculator", JSON.stringify(updatedSubjects));
  };

  // GPA Calculation Logic
  const calculateGPA = (percentage) => {
    if (percentage >= 85) return "4.00";
    else if (percentage >= 80) return "3.66";
    else if (percentage >= 75) return "3.33";
    else if (percentage >= 71) return "3.00";
    else if (percentage >= 68) return "2.66";
    else if (percentage >= 64) return "2.33";
    else if (percentage >= 61) return "2.00";
    else if (percentage >= 58) return "1.66";
    else if (percentage >= 54) return "1.30";
    else if (percentage >= 50) return "1.00";
    else return "0.00";
  };

  const handleDeleteTable = () => {
    localStorage.removeItem("GradeCalculator");
    setSubjects([]);
  };

  return (
    <div className="fade-in container mx-auto px-4 py-8">
      <Helmet>
        <title>GPA and SGPA Calculator - GradeGenie</title>
        <meta
          name="description"
          content="Accurately calculate your GPA and SGPA with GradeGenie's online academic grade calculator. Add subjects, manage assessments, and track academic progress."
        />
        <meta
          name="keywords"
          content="GPA Calculator, SGPA Calculator, Grade Tracker, Calculate GPA Online, Academic Performance Management"
        />
        <meta
          property="og:title"
          content="GPA and SGPA Calculator - GradeGenie"
        />
        <meta
          property="og:description"
          content="GradeGenie is the most accurate GPA and SGPA calculator, allowing students to calculate grades, add subjects, and track assessments easily."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-primary">GPA and SGPA Calculator</h1>
        <p className="text-lg text-dark mt-6 max-w-3xl mx-auto">
          Calculate your GPA and SGPA quickly and accurately with GradeGenie.
          Add subjects, input assessments, and monitor your academic progress
          seamlessly. Our tool simplifies GPA management for students.
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white md:p-10 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-primary">
          Add or Update Subject
        </h2>
        <SubjectForm
          onAddOrUpdate={handleAddOrUpdate}
          existingSubjects={subjects}
          editingAssessment={editingAssessment}
          setEditingAssessment={setEditingAssessment}
        />
      </div>

      {/* Result Section */}
      <div className="bg-white md:p-10 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-primary">
          Result Overview
        </h2>
        <ResultCard
          subjects={subjects}
          onDeleteAssessment={handleDeleteAssessment}
          setEditingAssessment={setEditingAssessment}
          deleteTable={handleDeleteTable}
        />
      </div>

      {/* Detailed Content Section */}
      <div className="bg-gray-100 md:p-12 rounded-lg shadow-lg mb-16">
        <h2 className="text-4xl font-semibold text-primary mb-8">
          How to Use the GPA and SGPA Calculator
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This GPA and SGPA calculator is designed to help students manage their
          academic performance effortlessly. You can track subject grades, add
          assessments, and calculate the cumulative GPA or SGPA dynamically.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Step-by-Step Guide to Using the Tool:
        </h3>
        <ol className="list-decimal pl-8 text-lg text-gray-700 leading-relaxed">
          <li className="mb-3">
            <strong>Add a Subject:</strong>
            Click on the "Add / Update Subject" section. Enter the subject name
            and credit hours.
          </li>
          <li className="mb-3">
            <strong>Input Assessments:</strong>
            For each subject, add assessments (Quiz, Midterm, Final Exam). Input
            the marks obtained, maximum marks, and weightage (percentage
            contribution of the assessment to the final grade).
          </li>
          <li className="mb-3">
            <strong>Track GPA Dynamically:</strong>
            The tool calculates GPA based on the formula:
            <code className="bg-gray-200 p-1 rounded">
              (Obtained Marks / Max Marks) * Weightage
            </code>
            This weighted average is added to the total, and the GPA is updated
            instantly.
          </li>
          <li className="mb-3">
            <strong>Review and Edit:</strong>
            All subjects and assessments are displayed under "Result Overview."
            Click on a subject to expand and view the assessments. Edit or
            delete assessments easily by clicking the buttons in the table.
          </li>
        </ol>

        {/* Example Section */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">Example:</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          Suppose you add the subject "Mathematics" with 3 credit hours. Then
          you add the following assessments:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
          <li>Quiz: 15/20 marks (Weightage: 20%)</li>
          <li>Midterm: 40/50 marks (Weightage: 30%)</li>
          <li>Final Exam: 70/100 marks (Weightage: 50%)</li>
        </ul>
        <p className="text-lg leading-relaxed text-gray-700">
          The obtained marks for each assessment are weighted and summed up to
          compute the final grade. Example Calculation:
          <code className="bg-gray-200 p-1 rounded">
            (15 / 20) * 20 + (40 / 50) * 30 + (70 / 100) * 50
          </code>
          <br />
          This gives the GPA for Mathematics, which is used to calculate the
          SGPA by averaging the GPAs across all subjects.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-primary mb-8">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-3">
            1. How does this GPA calculator work?
          </h3>
          <p className="text-lg text-gray-700">
            The calculator computes GPA and SGPA based on weighted marks entered
            for each subject. It dynamically updates results, ensuring accurate
            academic tracking.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-3">
            2. Can I update or delete assessments?
          </h3>
          <p className="text-lg text-gray-700">
            Yes, assessments can be updated or deleted by expanding the subject
            row under the Result Overview section.
          </p>
        </div>
      </div>
      {/* Criteria Tables */}
      <Table
        title={gradeCriteria.title}
        headers={gradeCriteria.headers}
        data={gradeCriteria.data}
      />
      <Table
        title={gpaCriteria.title}
        headers={gpaCriteria.headers}
        data={gpaCriteria.data}
      />
    </div>
  );
};

export default GPA_Calculator_Page;
