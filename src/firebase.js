import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7ukrG1UimwWtno5DwXuuGgNF4KNZLPso",
  authDomain: "facebook-clone-3d2e4.firebaseapp.com",
  databaseURL: "https://facebook-clone-3d2e4.firebaseio.com",
  projectId: "facebook-clone-3d2e4",
  storageBucket: "facebook-clone-3d2e4.appspot.com",
  messagingSenderId: "916114177222",
  appId: "1:916114177222:web:1bea69efa3c5e57e032bc7",
  measurementId: "G-36CEWW42LJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
