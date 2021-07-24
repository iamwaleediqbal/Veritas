
import firebase from "firebase/app";
const config = {
    apiKey: "AIzaSyBZUv9phxkHI-7YtkL-pP13fnuptV3dlgg",
    projectId: "veritas-ae735",
    databaseURL: "https://veritas-ae735.firebaseio.com",
    authDomain: "veritas-ae735.firebaseapp.com",
    // OPTIONAL
    storageBucket: "veritas-ae735.appspot.com",
    messagingSenderId: "71901819638"
  };
  const fireBaseApp = firebase.initializeApp(config);
  export default fireBaseApp;