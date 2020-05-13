import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBEEYqvWmN-RU2cNiGS8Jk9WEtDiteLakA",
    authDomain: "react-admin-96caf.firebaseapp.com",
    databaseURL: "https://react-admin-96caf.firebaseio.com",
    projectId: "react-admin-96caf",
    storageBucket: "react-admin-96caf.appspot.com",
    messagingSenderId: "366569209515",
    appId: "1:366569209515:web:f561af8c69769f5e1d81ee",
    measurementId: "G-M09LLRLM9R"
  };




const fire = firebase.initializeApp(firebaseConfig)


export default fire