// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log("auth ",import.meta.env.VITE_API_KEY);

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyCKJNqXWMluK7WYXManvtg7lqk-81yx2a4",
    authDomain: "student-management-ade99.firebaseapp.com",
    projectId: "student-management-ade99",
    storageBucket: "student-management-ade99.appspot.com",
    messagingSenderId: "466490389891",
    appId: "1:466490389891:web:7054be2108fa7a9ab632b6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;