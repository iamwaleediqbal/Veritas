import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import "../css/Login.css";
import firebase from "firebase";
import fireBaseApp from "../config/configdb";
import '../css/login_main.css';
import '../css/login_util.css';
import '../css/animate.css';


const Login = () => {
  const hist = new useHistory();
  const state = {
    email: "",
    password: "",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.email === "" || state.password === "") {
      alert("Please Enter Information");
      return;
    }

    fireBaseApp
      .firestore()
      .collection("publishers")
      .doc(state.email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          firebase
            .auth()
            .signInWithEmailAndPassword(state.email, state.password)
            .then((userCredential) => {
              // Signed in
              var user = userCredential.user;
              const userData = firebase.auth().currentUser;

              userData
                .updateProfile({
                  displayName: doc.data().name,
                })
                .then(() => {
                  // Update successful
                  // ...
                })
                .catch((error) => {
                  // An error occurred
                  // ...
                });
              //console.log(user);
              // ...
              hist.push("/dashboard");
            })
            .catch((error) => {
              console.log("Wrong Credentials");
            });
        } else {
          alert("Can't Sign In");
        }
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(
              "success sign in " + firebase.auth().currentUser.displayName
            );
            return;
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(state.email, state.password)
              .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
              });
          }
        });
      });
  };

  return (
    <div className="limiter">
		<div className="container-login100" style={{"backgroundColor": '#3e3e3e'}}>
			<div className="wrap-login100" style={{"backgroundImage": 'url("images/bg.svg")'}}>
				<div className="login100-pic js-tilt" data-tilt>
        <h2>Welcome To Veritas Publisher Portal</h2>
        <p>Please Enter your credentials and login to your account</p>				
        </div>

				<form className="login100-form validate-form" onSubmit={handleSubmit}>
        <a href="/">
          <img
              className="center-block lib-img-show"
              src={"/Assets/logo.png"}
              width="80"
              height="80"
              title="Veritas"
              alt="Veritas"
            />				
          </a>
					<span className="login100-form-title">
						Publisher Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
          <input
              className="Logininput"
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              onChange={(e) => {
                state.email = e.target.value;
              }}
            />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
            <input
              className="Logininput"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                state.password = e.target.value;
              }}
            />						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn"
              type="submit"
              id="submit"
              onClick={handleSubmit}
            >
              Log In{" "}
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>

  );
};
ReactDOM.render(<Login />, document.getElementById("root"));
export default Login;
	