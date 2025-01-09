import React from "react";
import CGPACalculator from "../components/CalculatorComponents/CGPACalculator";
import { Helmet } from "react-helmet-async";

const CGPA_Calculator_Page = () => {
  return (
    <div className="fade-in container mx-auto px-6 py-8">
      <Helmet>
        <title>CGPA Calculator - Accurate Online CGPA Calculation Tool</title>
        <meta
          name="description"
          content="Calculate your CGPA accurately by entering SGPA for each semester using GradeGenie's online CGPA calculator. Track academic progress effortlessly."
        />
        <meta
          name="keywords"
          content="CGPA Calculator, SGPA to CGPA, Calculate CGPA Online, Semester GPA Calculator, Academic Performance Tools"
        />
        <meta name="author" content="GradeGenie" />
      </Helmet>

      {/* CGPA Calculator Component */}
      <div className="py-12 bg-background">
        <CGPACalculator />
      </div>

      {/* SEO Content Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-accent break-words">
            How to Use the CGPA Calculator
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            GradeGenie's CGPA calculator helps students easily compute their
            cumulative GPA by entering their SGPA for each semester. This tool
            simplifies the process of calculating academic performance by
            automating the formula used by most educational institutions.
          </p>

          <h3 className="text-3xl font-semibold mt-12 mb-6">
            Step-by-Step Guide to Calculate CGPA
          </h3>
          <ul className="text-lg text-gray-700 space-y-4 text-left mx-auto max-w-3xl">
            <li>
              <span className="font-semibold">Step 1:</span> Enter the SGPA for
              each semester in the respective fields.
            </li>
            <li>
              <span className="font-semibold">Step 2:</span> Click the "Add
              Semester" button to add up to 10 semesters.
            </li>
            <li>
              <span className="font-semibold">Step 3:</span> Remove any semester
              by clicking the delete icon next to the semester entry.
            </li>
            <li>
              <span className="font-semibold">Step 4:</span> View your final
              CGPA at the bottom of the calculator, automatically updating as
              you input values.
            </li>
          </ul>

          <h3 className="text-3xl font-semibold mt-12 mb-6">
            How is CGPA Calculated?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            CGPA (Cumulative Grade Point Average) is calculated by averaging the
            SGPA (Semester Grade Point Average) over multiple semesters. The
            formula is:
          </p>
          <p className="bg-gray-100 p-6 rounded-lg text-xl font-semibold mt-6 inline-block">
            CGPA = (Sum of SGPA) / (Number of Semesters)
          </p>

          <h3 className="text-3xl font-semibold mt-12 mb-6">
            Why Use GradeGenie's CGPA Calculator?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our CGPA calculator is designed with simplicity and accuracy in
            mind. Whether you’re a high school, college, or university student,
            this tool is intuitive and allows quick calculation of CGPA,
            enabling you to stay on top of your academic performance. With
            GradeGenie, tracking grades and monitoring progress has never been
            easier.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CGPA_Calculator_Page;
