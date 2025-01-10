import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaCalculator,
  FaInfoCircle,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="fade-in container mx-auto px-4 py-8">
      <Helmet>
        <title>GradeGenie - Online GPA, CGPA, and SGPA Calculator</title>
        <meta
          name="description"
          content="Calculate your GPA, CGPA, and SGPA with GradeGenie – the most accurate online academic grade calculator for students. Convert SGPA to percentage easily!"
        />
        <meta
          name="keywords"
          content="GPA Calculator, CGPA Converter, SGPA to GPA, Grade Calculator Online, Academic Performance Tools"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="text-dark min-h-[70dvh] flex flex-col justify-center items-center text-center">
        <h1 className="text-accent w-full lg:w-1/2">
          Master Your Grades with Our Free GPA, CGPA, and SGPA Calculator
        </h1>
        <p className="text-lg mb-8 max-w-3xl text-gray-700">
          Welcome to GradeGenie – your trusted online tool to calculate GPA,
          CGPA, and SGPA effortlessly. Track your academic performance, convert
          SGPA to percentages, and unlock insights into your grades with
          precision and ease!
        </p>

        <div className="space-x-6 flex flex-col gap-5 md:flex-row">
          <Link
            to="/gpa-calculator"
            className="flex items-center justify-center bg-accent text-lightText px-6 py-3 rounded-lg shadow-strong hover:bg-primary transition gap-2"
          >
            <FaCalculator className="text-xl" />
            Start Calculating Now
          </Link>
          <Link
            to="/about"
            className="flex items-center justify-center border border-primary px-6 py-3 rounded-lg hover:text-lightText hover:bg-primary transition gap-2"
          >
            <FaInfoCircle className="text-xl" />
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background text-lightText">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-heading font-semibold mb-10 text-accent">
            Why Choose GradeGenie?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1: Accurate GPA Calculation */}
            <div className="p-8 rounded-lg shadow-subtle bg-accent hover:shadow-strong transition">
              <div className="text-4xl text-white bg-dark p-4 inline-block rounded-full mb-4">
                <FaCalculator />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Accurate GPA Calculation
              </h3>
              <p className="text-md">
                GradeGenie ensures precise GPA, CGPA, and SGPA calculations.
                Trusted by students worldwide, it's your go-to academic tool.
              </p>
            </div>

            {/* Feature 2: Easy to Use */}
            <div className="p-8 rounded-lg shadow-subtle bg-accent hover:shadow-strong transition">
              <div className="text-4xl text-white bg-dark p-4 inline-block rounded-full mb-4">
                <FaUserFriends />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Easy to Use</h3>
              <p className="text-md">
                GradeGenie is designed for simplicity and efficiency, enabling
                you to calculate grades effortlessly with its user-friendly
                interface.
              </p>
            </div>

            {/* Feature 3: Track Academic Progress */}
            <div className="p-8 rounded-lg shadow-subtle bg-accent hover:shadow-strong transition">
              <div className="text-4xl text-white bg-dark p-4 inline-block rounded-full mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Track Academic Progress
              </h3>
              <p className="text-md">
                Stay on top of your academic journey. Convert SGPA to percentage
                and gain insights into your performance effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
