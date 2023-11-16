import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY4bBw4es2rSZCS6Bn3g_2kupDrFk-2Oo",
  authDomain: "video-app-4b91c.firebaseapp.com",
  projectId: "video-app-4b91c",
  storageBucket: "video-app-4b91c.appspot.com",
  messagingSenderId: "155656846338",
  appId: "1:155656846338:web:a2d54b8837d67973c53b1b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
