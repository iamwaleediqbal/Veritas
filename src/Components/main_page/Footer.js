import React from "react";
import "../../css/nicepage.css";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="pswp__caption u-align-center u-clearfix u-footer u-grey-80 u-footer"
        id="sec-0cf6"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <p className="u-small-text u-text u-text-variant u-text-1">
            Powered By: Mela Blocks Technologies
          </p>
        </div>
      </footer>
    </>
  );
};
ReactDOM.render(<Footer />, document.getElementById("root"));
export default Footer;
