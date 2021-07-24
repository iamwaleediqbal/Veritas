import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import '../css/Login.css';
import firebase from "firebase";
import fireBaseApp from '../config/configdb'

	
const Login = () =>{
    const hist = new useHistory();
	const state = {
		email: '',
		password: ''
	}
	const handleSubmit = (event) => {
		
		event.preventDefault();	
		if(state.email === '' || state.password === ''){
			alert("Please Enter Information");
			return;
		}
		
		fireBaseApp.firestore()
					.collection("publishers")
					.doc(state.email)
					.get()
					.then(doc => {
						if (doc.exists) {
							console.log(doc.data());
		 					firebase.auth()
			  						.signInWithEmailAndPassword(state.email, state.password)
			  						.then((userCredential) => {
										// Signed in
										var user = userCredential.user;
										const userData = firebase.auth().currentUser;
										
										userData.updateProfile({
											displayName: doc.data().name
										}).then(() => {
										// Update successful
										// ...
										}).catch((error) => {
										// An error occurred
										// ...
										});  
										//console.log(user);
										// ...
										hist.push('/dashboard');
										
									  })
			  						.catch((error) => {
										console.log("Wrong Credentials")
									});
									
						}
						else{
							alert("Can't Sign In");
						}
						firebase.auth().onAuthStateChanged(user => {
							if (user) {
								console.log('success sign in '  + firebase.auth().currentUser.displayName);
								return;
							} 
							else {
								firebase.auth().createUserWithEmailAndPassword(state.email,state.password).then((userCredential) => {
									// Signed in
									var user = userCredential.user;
									// ...
								  })
							}
						});
					
					});
			
	};   
		
		
    return (
			
            <div className = "LoginBody">
                <div className="container" id="container">
		            <div className="form-container log-in-container">
			            <form className = "LoginForm"onSubmit={handleSubmit}>
				            <h1><img className = "lib-img-show" src={"/Assets/logo.png"} width="80" height="80" title="Veritas" alt="Veritas" /></h1><br /><br />
				            <input className = "Logininput"type="email" placeholder="Email" id= "email"  name = "email" onChange={(e) => {  state.email = e.target.value } } />

				            <input className = "Logininput" type="password" placeholder="Password" name = "password" onChange={(e) => {  state.password =  e.target.value }} />
				            <a href="#">Forgot your password?</a>
				            <button className =  "mnbtn" type = "submit" id = "submit" onClick = {handleSubmit} >Log In </button>
			            </form>
		            </div>
                
		            <div className="overlay-container">
			            <div className="overlay">
				            <div className="overlay-panel overlay-right">
					            <h1>Welcome To Veritas Publisher Portal</h1>
					            <p>Please Enter your credentials and login to your account</p>
				            </div>
			            </div>
                    </div>
	            </div>
            </div>

            
        );
  
}
ReactDOM.render(<Login />, document.getElementById('root'));
export default Login;

