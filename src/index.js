import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bulma/css/bulma.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaYpplAT03YJXpE7-WD3QkLVTixMQDy7E",
  authDomain: "yardsale-uw.firebaseapp.com",
  projectId: "yardsale-uw",
  storageBucket: "yardsale-uw.appspot.com",
  messagingSenderId: "908488081877",
  appId: "1:908488081877:web:220777cf4b6a392a557d5c",
  measurementId: "G-WRDG2DCKVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();