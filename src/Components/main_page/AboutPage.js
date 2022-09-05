import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../css/nicepage.css";
import "../../css/About.css";
import ReactDOM from "react-dom";

const AboutPage = () => {
  return (
    <>
      <Header />
      <section
        className="pt-0 u-clearfix u-image u-shading u-section-1"
        id="sec-d193"
      >
        <div className="op-0-8 bookform u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-valign-top u-container-layout-1">
                    <h2 className="u-custom-font u-font-playfair-display u-text u-text-black u-text-1">
                      Who we are?
                    </h2>
                    <div className="u-border-6 u-border-grey-dark-1 u-line u-line-horizontal u-line-1"></div>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-top u-container-layout-2">
                    <p className="u-text u-text-black u-text-2">
                      &nbsp; &nbsp;With 10 years industry experience, Ashley
                      Maddison is the creative founder of AM Interior Studio and
                      has experience within the residential and commercial
                      sector. With a degree and diploma in Interior Design, she
                      has worked with Architects, builders and kitchen
                      designers, designing and managing projects from boutique
                      commercial office fitouts to high end luxury homes. <br />
                      <br />
                      &nbsp; &nbsp;AM Interior Studio provide fully resolved
                      interior and styling solutions and no matter the size of
                      the project, in all stages of the design there is a high
                      level of detail and functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default AboutPage;
