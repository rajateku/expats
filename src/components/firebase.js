import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAn1cCuoYRzx0lE_9huy6MrkYe15YAwyLE",
  authDomain: "telfylm.firebaseapp.com",
  projectId: "telfylm",
  storageBucket: "telfylm.appspot.com",
  messagingSenderId: "240811103652",
  appId: "1:240811103652:web:008649e0022e904b5edd31",
  measurementId: "G-52GBL3CBHX"
};
firebase.initializeApp(config);


export default firebase;