import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAExRIS20IA1G2WiZSeNjEa8fqGPH5P9wI",
    authDomain: "journal-app-a94f1.firebaseapp.com",
    databaseURL: "https://journal-app-a94f1.firebaseio.com",
    projectId: "journal-app-a94f1",
    storageBucket: "journal-app-a94f1.appspot.com",
    messagingSenderId: "85633871290",
    appId: "1:85633871290:web:4423543fa8f180b4138183",
    measurementId: "G-F27PKZJWEQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }