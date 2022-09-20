import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../css/nicepage.css";
import "../../css/Contact.css";
import HubspotForm from "react-hubspot-form";
import ReactDOM from "react-dom";

const ContactPage = () => {
  return (
    <>
      <Header />
      <section
        className="pt-0 u-align-center u-clearfix u-section-1"
        id="sec-b7a4"
        style={{ backgroundImage: 'url("images/bg.svg")' }}
      >
        <div className="op-0-8 bookform u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">Contact Us</h2>
          <div className="u-form u-form-1">
            <HubspotForm
              region="na1"
              portalId="22630974"
              formId="9b60a49e-7844-472f-bb6f-1edc099299a8"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={<div>Loading...</div>}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
