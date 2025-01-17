import React from "react";
import { Helmet } from "react-helmet-async";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons

const About = () => {
  return (
    <div className="fade-in container mx-auto px-6 py-8">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Me - GradeGenie</title>
        <meta
          name="description"
          content="Learn more about me and my journey in developing GradeGenie, your ultimate academic companion for GPA, CGPA, and SGPA calculations."
        />
        <meta
          name="keywords"
          content="GradeGenie, About Me, GPA Calculator, CGPA Calculator, SGPA Calculator, Academic Tools, Web Development"
        />
        <meta name="author" content="Ahad" />
      </Helmet>
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-primary text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-dark mb-8">
          Empowering students and educators with cutting-edge tools to achieve
          academic success.
        </p>
      </header>
      {/* About Me Sections */}
      <main className="space-y-12 md:p-12">
        {/* Welcome Section */}
        <section className="p-8 rounded-lg shadow-xl bg-white">
          <h2 className="text-3xl font-semibold text-accent mb-4">
            Welcome to GradeGenie!
          </h2>
          <p className="text-lg text-dark leading-relaxed">
            Hi, I'm Ahad! I’m the creator behind GradeGenie, built with a
            mission to provide students, educators, and lifelong learners with
            the best tools and resources to excel in their academic journey.
            Whether you're managing your GPA, CGPA, or SGPA, GradeGenie is here
            to help you achieve your academic goals.
          </p>
        </section>

        {/* Mission Section */}
        <section className="p-8 rounded-lg shadow-xl bg-white">
          <h2 className="text-3xl font-semibold text-accent mb-4">
            My Mission
          </h2>
          <p className="text-lg text-dark leading-relaxed">
            My mission is to make learning more accessible and to empower
            individuals to take control of their education. I believe that
            everyone deserves access to tools that not only help them understand
            their academic progress but also motivate them to reach greater
            heights.
          </p>
        </section>

        {/* Personal Journey Section */}
        <section className="p-8 rounded-lg shadow-xl bg-white">
          <h2 className="text-3xl font-semibold text-accent mb-4">
            My Journey
          </h2>
          <p className="text-lg text-dark leading-relaxed">
            I’ve always been passionate about technology and education. After
            experiencing the struggles students face in managing their academic
            performance, I decided to create a solution that could help everyone
            track and calculate their grades with ease. This project is the
            result of that vision, and I hope it makes a difference in your
            academic journey.
          </p>
        </section>

        {/* Contact Section */}
        <section className="p-8 rounded-lg shadow-xl bg-white">
          <h2 className="text-3xl font-semibold text-accent mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-dark leading-relaxed">
            If you have any questions, suggestions, or feedback, I’d love to
            hear from you! Feel free to reach out at:
          </p>
          <p className="text-lg text-dark mt-4 break-words">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:ahad324@gmail.com"
              className="text-primary hover:underline flex items-center"
            >
              <FaEnvelope className="mr-2" />
              gradegeniesite@gmail.com
            </a>
          </p>
        </section>

        {/* Social Links Section */}
        <section className="p-8 rounded-lg shadow-xl bg-white">
          <h2 className="text-3xl font-semibold text-accent mb-4">
            Connect With Me
          </h2>
          <p className="text-lg text-dark leading-relaxed">
            You can also connect with me on these platforms:
          </p>
          <div className="mt-6 flex space-x-6 justify-center">
            <a
              href="https://www.linkedin.com/in/abdul-ahad-a08263273"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-blue-600 flex items-center space-x-2"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ahad324"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-gray-800 flex items-center space-x-2"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
