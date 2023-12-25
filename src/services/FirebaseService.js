// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP29hyxh4ERTns3gEIgbI06d0fL9J9MZE",
  authDomain: "code-help-43432.firebaseapp.com",
  projectId: "code-help-43432",
  storageBucket: "code-help-43432.appspot.com",
  messagingSenderId: "1034861475668",
  appId: "1:1034861475668:web:2cc372d331c2cf15893ac1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();
export const authWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, provider);

    return user.accessToken;
  } catch (error) {
    return error;
  }
};
