import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "**********",
  authDomain: "chat-online-react-e0ec9.firebaseapp.com",
  projectId: "chat-online-react-e0ec9",
  storageBucket: "chat-online-react-e0ec9.appspot.com",
  messagingSenderId: "889626544254",
  appId: "***********",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
