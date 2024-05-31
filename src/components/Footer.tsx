import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Support</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Safety Information
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Cancellation Options
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul>
              <li className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4 h-4" />
                <span>Email: support@gmail.com</span>
              </li>
              <li className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 w-4 h-4" />
                <span>Phone: +1 (123) 456-7890</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Flipmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
