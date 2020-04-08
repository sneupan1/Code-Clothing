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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
