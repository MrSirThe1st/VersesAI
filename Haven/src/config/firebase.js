import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI_S6QYkMe9nnrkTzsDeenAOcc3rlU0qo",
  authDomain: "health-8fcc7.firebaseapp.com",
  projectId: "health-8fcc7",
  storageBucket: "health-8fcc7.appspot.com",
  messagingSenderId: "144600049736",
  appId: "1:144600049736:web:bf576dfac2943eaf53107d",
  measurementId: "G-09TP91Y4L1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export { app, auth };
