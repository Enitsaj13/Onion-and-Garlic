import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCKpGrKyX__mrAK89kpC1szG6H_0rpODv4",
  authDomain: "onion-and-garlic.firebaseapp.com",
  projectId: "onion-and-garlic",
  storageBucket: "onion-and-garlic.appspot.com",
  messagingSenderId: "8823493165",
  appId: "1:8823493165:web:968e340aa3115d5849dea4",
  measurementId: "G-0V594S8WDZ"
}

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)









