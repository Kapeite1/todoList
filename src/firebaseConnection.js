import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCzZNsm2GtS7WBZsEsvTADZJuScdMrIRV0",
    authDomain: "todolist-ee726.firebaseapp.com",
    databaseURL: "https://todolist-ee726.firebaseio.com",
    projectId: "todolist-ee726",
    storageBucket: "todolist-ee726.appspot.com",
    messagingSenderId: "463372393582",
    appId: "1:463372393582:web:1d327072d009e9e52e9a7f",
    measurementId: "G-K7PJ38PWSM"
  };

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;