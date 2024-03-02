import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-2 md:mb-0">
            <p>123 Blood Bank Street,</p>
            <p>City, Country</p>
          </div>
          <div className="mb-2 md:mb-0">
            <p>contact@sandiegobb.com</p>
            <p>123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} San Diego Blood Bank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
