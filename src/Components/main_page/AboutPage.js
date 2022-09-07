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
                      &nbsp; &nbsp;Veritas - bringing together readers, writers, and publishers 

                      Veritas is an e-publishing solution that aims to cater three major groups: 
                      readers, writers, and publishers. It provides a comprehensive outlook to the way books are 
                      read and published. With the onset of the digital age, e-books have gained preference over 
                      traditional books and are forecasted to be even more popular in the future. 
                      <br />
                      <br />
                      &nbsp; &nbsp;Veritas, revamps the e-book industry by bringing readers, writers and publishers
                       on the same platform. Our aim is three-fold: enhance user’s reading experience, allow writers 
                       to self-publish, and expand the publishers’ distribution network to include a larger audience.
                      <br/>
                      <br/>
                      &nbsp; &nbsp; Located in the Pakistan’s cultural capital, Lahore, Veritas Publications was founded by 
                      Muneer Shahid and is currently headed by Shamshad Shahid and Kamran Umair. The publishing house is focused
                       on the revival, development and promotion of South Asian literature in local languages as well as English.
                      With the onset of technological era, the Veritas team realized the importance of capturing the digital landscape 
                      and is striving to launch an application that would bridge the gap between the readers, writers, and publishers. 
                      By providing an integrated solution, Veritas aims to revolutionize the e-book ecosystem.
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
