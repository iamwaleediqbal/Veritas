import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import "../css/Header.css";
import "../css/style.css";
import firebase from "firebase";

const Header = () => {
  const hist = new useHistory();
  const logOutUser = () => {
    firebase.auth().signOut();

    hist.push("/publisher");
  };
  const path = window.location.pathname;

  return (
    <div className="">
      <div className="w-full  mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <a
            href="#"
            className="u-image u-logo u-image-1"
            data-image-width="972"
            data-image-height="225"
          >
            <img
              className="w-1/3 u-logo-image u-logo-image-1"
              src={"Assets/Veritas.png"}
              title="Veritas"
              alt="Veritas"
            />
          </a>
          <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
            <div
              className="menu-collapse"
              style={{ fontSize: "1rem", letterSpacing: "0px" }}
            >
              <a
                className="col-lg-1 u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="#"
              >
                <svg className="u-svg-link" viewBox="0 0 24 24">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#menu-hamburger"
                  ></use>
                </svg>
                <svg
                  className="u-svg-content"
                  version="1.1"
                  id="menu-hamburger"
                  viewBox="0 0 16 16"
                  x="0px"
                  y="0px"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect y="1" width="16" height="2"></rect>
                    <rect y="7" width="16" height="2"></rect>
                    <rect y="13" width="16" height="2"></rect>
                  </g>
                </svg>
              </a>
            </div>
            <div className="u-nav-container">
              <ul className="col-md-pull-1 u-nav u-unstyled u-nav-1">
                <li
                  className={
                    path == "/magazineupload"
                      ? "mnbtn u-nav-item"
                      : "u-nav-item"
                  }
                >
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    href="/magazineupload"
                    style={{ padding: "10px 20px" }}
                  >
                    Upload a Magazine?
                  </a>
                </li>
                <li
                  className={
                    path == "/bookupload" ? "mnbtn u-nav-item" : "u-nav-item"
                  }
                >
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    href="/bookupload"
                    style={{ padding: "10px 20px" }}
                  >
                    Upload a Book?
                  </a>
                </li>
                <li className={path == "/" ? "mnbtn u-nav-item" : "u-nav-item"}>
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    onClick={logOutUser}
                    style={{ padding: "10px 20px" }}
                  >
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
            <div className="u-nav-container-collapse">
              <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close"></div>
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="/magazineupload"
                      >
                        Upload a Magazine
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        href="/bookupload"
                      >
                        Upload a Book
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link"
                        onClick={logOutUser}
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
            </div>
          </nav>

          
        </div>
      </div>
    </div>
  );
};
export default Header;
