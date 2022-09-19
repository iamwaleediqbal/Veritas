import React from "react";
import "../../css/nicepage.css";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <>
      <footer className="fixed inset-x-0 bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://melablocks.com/" className="hover:underline">Melablocks Inc.™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/about" className="mr-4 hover:underline md:mr-6">About</a>
              </li>
              <li>
                  <a href="/contact" className="hover:underline mr-4">Contact</a>
              </li>
              <li>
                  <a href="/publisher" className="hover:underline">Are you a publisher?</a>
              </li>
          </ul>
      </footer>
    </>
  );
};
ReactDOM.render(<Footer />, document.getElementById("root"));
export default Footer;
