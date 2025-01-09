import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent text-lightText p-6 text-center">
      <p>&copy; {new Date().getFullYear()} GradeGenie. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
