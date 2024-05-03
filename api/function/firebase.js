const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const {
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  getAuth,
} = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyADSMKz_NFBoaQX76yLwEYezmmGrLcpQgg",
  authDomain: "cleanerio-b080f.firebaseapp.com",
  projectId: "cleanerio-b080f",
  storageBucket: "cleanerio-b080f.appspot.com",
  messagingSenderId: "546830628956",
  appId: "1:546830628956:web:224344e1a0bf7bfa644e99",
  measurementId: "G-EN68PDV2Q6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const facebookProvider = new FacebookAuthProvider();
const appleProvider = new OAuthProvider("apple.com");
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth(app);

module.exports = {
  firebaseConfig,
  app,
  db,
  facebookProvider,
  appleProvider,
  googleAuthProvider,
  auth,
};
