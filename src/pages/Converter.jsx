import React from "react";
import { Helmet } from "react-helmet-async";
import BinaryToAll from "../components/ConversionComponents/BinaryToAll";
import OctalToAll from "../components/ConversionComponents/OctalToAll";
import DecimalToAll from "../components/ConversionComponents/DecimalToAll";
import HexaToAll from "../components/ConversionComponents/HexaToAll";
import BinaryOperations from "../components/ConversionComponents/BinaryOperations";
import OctalOperations from "../components/ConversionComponents/OctalOperations";
import HexaOperations from "../components/ConversionComponents/HexaOperations";

const Converter = () => {
  return (
    <div className="fade-in container mx-auto px-6 py-8">
      <Helmet>
        <title>Conversion Tools - Binary, Octal, Decimal, Hexadecimal</title>
        <meta
          name="description"
          content="Explore GradeGenie's Conversion Tools to seamlessly convert between Binary, Octal, Decimal, and Hexadecimal number systems. Perform advanced operations effortlessly!"
        />
        <meta
          name="keywords"
          content="Binary Conversion, Octal Conversion, Decimal Conversion, Hexadecimal Conversion, Number System Operations, Online Conversion Tools"
        />
        <meta name="author" content="GradeGenie" />
      </Helmet>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-primary mb-4">
          Number System Conversion & Operations
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover the power of seamless number system conversions with
          GradeGenie. Effortlessly convert and perform operations between
          Binary, Octal, Decimal, and Hexadecimal formats using our
          state-of-the-art tools.
        </p>
      </div>

      {/* Conversion Components */}
      <section className="flex flex-wrap gap-8 mb-16">
        <BinaryToAll />
        <OctalToAll />
        <DecimalToAll />
        <HexaToAll />
        <tr className="h-1 bg-primary w-full " />
      </section>
      {/* Operations Components */}
      <section className="flex flex-wrap gap-8 mb-16">
        <BinaryOperations />
        <OctalOperations />
        <HexaOperations />
      </section>

      {/* SEO Content */}
      <section className="bg-background p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary text-center break-words">
          Comprehensive Guide to Number System Conversions
        </h2>

        <p className="text-lg text-dark leading-relaxed mb-6">
          Understanding number systems is critical for students, programmers,
          and professionals in the digital world. Number systems like Binary,
          Octal, Decimal, and Hexadecimal form the foundation of computing and
          electronics. Whether you're working on academic projects, debugging
          code, or calculating network masks, GradeGenie's tools are here to
          simplify these complex processes for you.
        </p>

        <h3 className="text-3xl font-semibold mb-4">
          Deep Dive into Number Systems
        </h3>
        <p className="text-lg text-dark leading-relaxed mb-6">
          Number systems are used to represent and calculate values in various
          contexts. Each system has unique characteristics and applications:
        </p>
        <ul className="list-disc pl-8 text-lg text-dark space-y-4 mb-6">
          <li>
            <strong>Binary (Base-2):</strong> The language of computers,
            comprising 0s and 1s. Widely used in digital circuits and binary
            arithmetic.
          </li>
          <li>
            <strong>Octal (Base-8):</strong> Compact representation of binary
            values, commonly used in microprocessors and memory addresses.
          </li>
          <li>
            <strong>Decimal (Base-10):</strong> The number system we use daily
            for arithmetic, with digits ranging from 0 to 9.
          </li>
          <li>
            <strong>Hexadecimal (Base-16):</strong> Efficient representation of
            binary data using digits 0-9 and letters A-F. Commonly used in
            programming, color codes, and memory allocation.
          </li>
        </ul>

        <h3 className="text-3xl font-semibold mb-4">
          How to Use GradeGenie's Conversion Tools?
        </h3>
        <p className="text-lg text-dark leading-relaxed mb-6">
          Our tools are intuitive and provide instant results. Here's how you
          can use them:
        </p>
        <ul className="list-disc pl-8 text-lg text-dark space-y-4 mb-6">
          <li>
            <strong>Binary to All:</strong> Enter a binary number and instantly
            get its Octal, Decimal, and Hexadecimal equivalents.
          </li>
          <li>
            <strong>Octal to All:</strong> Convert any octal number into Binary,
            Decimal, and Hexadecimal formats effortlessly.
          </li>
          <li>
            <strong>Decimal to All:</strong> Input a decimal number and get its
            equivalent in Binary, Octal, and Hexadecimal formats.
          </li>
          <li>
            <strong>Hexadecimal to All:</strong> Convert hexadecimal numbers to
            Binary, Octal, and Decimal formats with precision.
          </li>
          <li>
            <strong>Operations:</strong> Perform addition, subtraction, and
            multiplication directly in Binary, Octal, or Hexadecimal number
            systems without manual conversions.
          </li>
        </ul>

        <h3 className="text-3xl font-semibold mb-4">
          Why Choose GradeGenie's Tools?
        </h3>
        <p className="text-lg text-dark leading-relaxed mb-6">
          GradeGenie's tools are designed with user-friendliness and precision
          in mind. Here's why our tools stand out:
        </p>
        <ul className="list-disc pl-8 text-lg text-dark space-y-4 mb-6">
          <li>
            <strong>Accuracy:</strong> Get precise results for conversions and
            operations, ensuring error-free calculations.
          </li>
          <li>
            <strong>Speed:</strong> Perform calculations and conversions in
            real-time with no delay.
          </li>
          <li>
            <strong>Cross-Device Compatibility:</strong> Use our tools on any
            device—mobile, tablet, or desktop.
          </li>
          <li>
            <strong>Free Access:</strong> Our tools are completely free, making
            them accessible to students, professionals, and hobbyists alike.
          </li>
        </ul>

        <h3 className="text-3xl font-semibold mb-4">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-2xl font-semibold text-primary">
              1. What is the difference between Binary and Hexadecimal systems?
            </h4>
            <p className="text-lg text-dark leading-relaxed">
              Binary is a Base-2 system using only 0 and 1, while Hexadecimal is
              a Base-16 system using digits 0-9 and letters A-F. Hexadecimal is
              often used to represent large binary values compactly.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-primary">
              2. Can I perform arithmetic operations directly in Binary?
            </h4>
            <p className="text-lg text-dark leading-relaxed">
              Yes! Use our Binary Operations tool to perform addition,
              subtraction, and multiplication directly in binary format.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-primary">
              3. Are these tools suitable for students?
            </h4>
            <p className="text-lg text-dark leading-relaxed">
              Absolutely! GradeGenie's tools are perfect for students, helping
              them understand number systems and perform accurate calculations
              with ease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Converter;
