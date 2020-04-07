import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPmVFr6O-0_rUBmKv01s3Rxi7merL-YAU",
  authDomain: "code-clothing-e6081.firebaseapp.com",
  databaseURL: "https://code-clothing-e6081.firebaseio.com",
  projectId: "code-clothing-e6081",
  storageBucket: "code-clothing-e6081.appspot.com",
  messagingSenderId: "391916313413",
  appId: "1:391916313413:web:ab0e93848407881ddafc2c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
