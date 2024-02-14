import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbmohWC8KFESDbZYD2lSWlaHhxG8exOo0",
  authDomain: "chat-online-react-e0ec9.firebaseapp.com",
  projectId: "chat-online-react-e0ec9",
  storageBucket: "chat-online-react-e0ec9.appspot.com",
  messagingSenderId: "889626544254",
  appId: "1:889626544254:web:4e8c167a5befa36fcfb02f",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };