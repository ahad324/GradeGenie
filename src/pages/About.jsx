import React from "react";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div className="fade-in container mx-auto px-6 py-8">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us - GradeGenie</title>
        <meta
          name="description"
          content="Learn more about GradeGenie, your ultimate academic companion for GPA, CGPA, and SGPA calculations. Explore our mission, team, and dedication to learning!"
        />
        <meta
          name="keywords"
          content="GradeGenie, About GradeGenie, GPA Calculator, CGPA Calculator, SGPA Calculator, Academic Tools"
        />
        <meta name="author" content="GradeGenie Team" />
      </Helmet>
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-primary">About Us</h1>
        <p className="text-lg text-dark">
          Empowering students and educators with cutting-edge tools to achieve
          academic success.
        </p>
      </header>
      {/* About Us Sections */}
      <main className="space-y-12 md:p-12">
        {/* Welcome Section */}
        <section className="p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-accent mb-4">
            Welcome to GradeGenie!
          </h2>
          <p className="text-lg text-dark">
            We are dedicated to providing you with the best tools and resources
            to excel in your academic journey. Whether you're a student,
            educator, or lifelong learner, GradeGenie is here to help you
            achieve your academic goals.
          </p>
        </section>

        {/* Mission Section */}
        <section className="p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-accent mb-4">Our Mission</h2>
          <p className="text-lg text-dark">
            At GradeGenie, our mission is to empower individuals through
            education. We believe that everyone deserves access to high-quality
            learning resources that inspire curiosity, foster creativity, and
            promote lifelong learning.
          </p>
        </section>

        {/* Team Section */}
        <section className=" p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-accent mb-4">Our Team</h2>
          <p className="text-lg text-dark">
            GradeGenie was founded by a passionate team of educators and
            developers who share a common goal: to make learning accessible and
            enjoyable for all. With diverse backgrounds in education,
            technology, and design, we bring a unique perspective to the world
            of online learning.
          </p>
        </section>

        {/* Contact Section */}
        <section className="p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-accent mb-4">Contact Us</h2>
          <p className="text-lg text-dark">
            If you have any questions, suggestions, or feedback, we would love
            to hear from you! Feel free to reach out to us at:
          </p>
          <p className="text-lg text-dark mt-4 break-words">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:gradegeniesite@gmail.com"
              className="text-primary hover:underline break-words"
            >
              gradegeniesite@gmail.com
            </a>
          </p>
        </section>
      </main>{" "}
    </div>
  );
};

export default About;
