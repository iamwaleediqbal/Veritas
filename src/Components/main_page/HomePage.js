import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../css/nicepage.css";
import "../../css/Home.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";


const HomePage = () => {
  return (
    <>
      <Header />
      <section
        className="u-align-center u-clearfix u-image u-shading u-section-1"
        src=""
        data-image-width="256"
        data-image-height="256"
        id="sec-b452"
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h1 className="u-text u-text-default u-title u-text-1">
            VERITAS - An Ebook Reading Platform
          </h1>
          <p className="text-white u-large-text u-text u-text-default u-text-variant u-text-2">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices.
          </p>
          <div className="text-white u-btn u-button-style u-palette-2-base u-btn-1">
            <Link to="/publisher">Are you a publisher?</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default HomePage;
