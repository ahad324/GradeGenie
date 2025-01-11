import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import NotFoundImg from "/NotFound.svg"; // Ensure the path to the image is correct

const NotFound = () => {
  return (
    <div className="fade-in flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6 py-4">
      {/* SEO Metadata */}
      <Helmet>
        <title>404 - Page Not Found | GradeGenie</title>
        <meta
          name="description"
          content="Oops! The page you’re looking for doesn’t exist or has been moved. Navigate back to the homepage to continue exploring GradeGenie."
        />
        <meta
          name="keywords"
          content="404 Error, Page Not Found, GradeGenie, Academic Tools, Error Page"
        />
        <meta name="author" content="GradeGenie Team" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Icon or Illustration */}
      <div className="mb-8 max-w-md">
        <img
          src={NotFoundImg}
          alt="404 Not Found"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-5xl font-bold text-dark mb-4">404</h1>
      <h2 className="text-3xl text-accent mb-4">Oops! Page not found.</h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back on track!
      </p>

      {/* Call to Action with Icon */}
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-accent rounded-lg shadow hover:bg-primary transition duration-200"
      >
        <FaArrowLeft className="mr-3" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
