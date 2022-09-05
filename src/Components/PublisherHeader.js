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

    hist.push("/");
  };

  return (
    <div className="HeaderBody">
      <div className="App-Header">
        <div className="NavBar">
          <h3 className="imgh">
            <img
              className="vimg"
              src={"Assets/Veritasl.png"}
              width="120"
              height="40"
              title="Veritas"
              alt="Veritas"
            />
            <form className="buttonForm" action="#">
              <button className="mnbtn" onClick={logOutUser}>
                LogOut
              </button>
            </form>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Header;
