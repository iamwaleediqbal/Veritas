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

          <div className="flex w-1/2 justify-end content-center">
            <a
              className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
              data-tippy-content="@twitter_handle"
              href="https://twitter.com/intent/tweet?url=#"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
              </svg>
            </a>
            <a
              className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
              data-tippy-content="#facebook_id"
              href="https://www.facebook.com/sharer/sharer.php?u=#"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
