import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4t_zf4CVypLcdYpHJdEz0OzXWYReu7cs",
  authDomain: "furniar-b0486.firebaseapp.com",
  projectId: "furniar-b0486",
  storageBucket: "furniar-b0486.appspot.com",
  messagingSenderId: "555027577278",
  appId: "1:555027577278:web:b24aab24f2e99bf811e1ef",
  measurementId: "G-SKELT4Y424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default {
    analytics,
    db
}