import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCauEMS9DGDWV5AleDNH62fKDlAwN97eFE",
  authDomain: "fir-auth-1132-26294.firebaseapp.com",
  projectId: "fir-auth-1132-26294",
  storageBucket: "fir-auth-1132-26294.appspot.com",
  messagingSenderId: "263779911198",
  appId: "1:263779911198:web:4a1cfa1dd487d2cd9f900f",
  measurementId: "G-QZY46XLH54"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
