import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3AUU63ex6ag1QfYQJdiepMYcUc_h3koI",
  authDomain: "firechat-3a8bc.firebaseapp.com",
  projectId: "firechat-3a8bc",
  storageBucket: "firechat-3a8bc.appspot.com",
  messagingSenderId: "735486831379",
  appId: "1:735486831379:web:eaf6cdcf3f34aedef608e6",
  measurementId: "G-GMBE9CNFXK"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }