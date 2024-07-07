/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
  });

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd1bVzRdW71Oy62cOaIH7KEBUOUqHFwHE",
  authDomain: "pillwise-backend.firebaseapp.com",
  projectId: "pillwise-backend",
  storageBucket: "pillwise-backend.appspot.com",
  messagingSenderId: "27005665601",
  appId: "1:27005665601:web:f3928bef2c97adb07821c0",
  measurementId: "G-67845E4BT7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);